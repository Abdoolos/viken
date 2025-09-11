import { useState, useEffect } from 'react';
import settings from "../content/settings.json";

export default function SmartStatus() {
  const [currentStatus, setCurrentStatus] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      // Convert to Oslo timezone
      const osloTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Oslo" }));
      setCurrentTime(osloTime);
      setCurrentStatus(calculateStatus(osloTime));
    };

    // Update immediately
    updateStatus();
    
    // Update every minute
    const interval = setInterval(updateStatus, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const calculateStatus = (osloTime) => {
    const workingHours = settings.workingHours;
    if (!workingHours) return { isOpen: false, message: "Ingen åpningstider konfigurert" };

    const today = osloTime.toISOString().split('T')[0]; // YYYY-MM-DD
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDay = dayNames[osloTime.getDay()];
    const currentHour = osloTime.getHours();
    const currentMinute = osloTime.getMinutes();
    const currentTimeMinutes = currentHour * 60 + currentMinute;

    // Check for holidays
    if (workingHours.holidays) {
      const holiday = workingHours.holidays.find(h => h.date === today);
      if (holiday) {
        if (holiday.hours === "Stengt") {
          return {
            isOpen: false,
            message: `Stengt - ${holiday.name}`,
            description: holiday.description || "",
            type: 'holiday'
          };
        } else {
          // Special holiday hours
          const { open, close } = parseTimeRange(holiday.hours);
          if (open && close) {
            const isWithinHours = currentTimeMinutes >= open && currentTimeMinutes < close;
            return {
              isOpen: isWithinHours,
              message: isWithinHours ? `Åpent - ${holiday.name}` : `Stengt - ${holiday.name}`,
              description: `Spesielle timer: ${holiday.hours}`,
              type: 'holiday',
              todayHours: holiday.hours
            };
          }
        }
      }
    }

    // Check for special days
    if (workingHours.specialDays) {
      const specialDay = workingHours.specialDays.find(day => {
        const start = new Date(day.startDate);
        const end = new Date(day.endDate);
        const current = new Date(today);
        return current >= start && current <= end;
      });
      
      if (specialDay) {
        const { open, close } = parseTimeRange(specialDay.hours);
        if (open && close) {
          const isWithinHours = currentTimeMinutes >= open && currentTimeMinutes < close;
          return {
            isOpen: isWithinHours,
            message: isWithinHours ? `Åpent - ${specialDay.name}` : `Stengt - ${specialDay.name}`,
            description: specialDay.message || `Spesielle timer: ${specialDay.hours}`,
            type: 'special',
            todayHours: specialDay.hours
          };
        }
      }
    }

    // Regular hours
    const todayHours = workingHours.regular[currentDay];
    if (todayHours === "Stengt") {
      return {
        isOpen: false,
        message: "Stengt i dag",
        description: getNextOpenDay(workingHours.regular, currentDay),
        type: 'closed'
      };
    }

    const { open, close } = parseTimeRange(todayHours);
    if (open && close) {
      const isWithinHours = currentTimeMinutes >= open && currentTimeMinutes < close;
      const minutesUntilClose = close - currentTimeMinutes;
      const minutesUntilOpen = open - currentTimeMinutes;

      if (isWithinHours) {
        if (minutesUntilClose <= 30) {
          return {
            isOpen: true,
            message: "Åpent - Stenger snart",
            description: `Stenger om ${minutesUntilClose} minutter`,
            type: 'closing-soon',
            urgency: true
          };
        }
        return {
          isOpen: true,
          message: "Åpent nå",
          description: `Åpent til ${formatTime(close)}`,
          type: 'open'
        };
      } else if (minutesUntilOpen > 0 && minutesUntilOpen <= 60) {
        return {
          isOpen: false,
          message: "Åpner snart",
          description: `Åpner om ${minutesUntilOpen} minutter`,
          type: 'opening-soon'
        };
      } else {
        return {
          isOpen: false,
          message: "Stengt nå",
          description: `Åpner ${formatTime(open)} i morgen`,
          type: 'closed'
        };
      }
    }

    return {
      isOpen: false,
      message: "Stengt",
      description: "Ingen åpningstider for i dag",
      type: 'closed'
    };
  };

  const parseTimeRange = (timeStr) => {
    if (!timeStr || timeStr === "Stengt") return { open: null, close: null };
    
    const match = timeStr.match(/(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})/);
    if (match) {
      const openHour = parseInt(match[1]);
      const openMinute = parseInt(match[2]);
      const closeHour = parseInt(match[3]);
      const closeMinute = parseInt(match[4]);
      
      return {
        open: openHour * 60 + openMinute,
        close: closeHour * 60 + closeMinute
      };
    }
    return { open: null, close: null };
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  const getNextOpenDay = (regularHours, currentDay) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayNames = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];
    
    let nextDayIndex = (days.indexOf(currentDay) + 1) % 7;
    let searchCount = 0;
    
    while (searchCount < 7) {
      const nextDay = days[nextDayIndex];
      if (regularHours[nextDay] !== "Stengt") {
        return `Åpner ${dayNames[nextDayIndex]} ${regularHours[nextDay]}`;
      }
      nextDayIndex = (nextDayIndex + 1) % 7;
      searchCount++;
    }
    
    return "Se åpningstider";
  };

  const getStatusStyle = () => {
    if (!currentStatus) return {};
    
    switch (currentStatus.type) {
      case 'open':
        return {
          background: 'linear-gradient(135deg, #10b981, #059669)',
          color: 'white',
          icon: '🟢'
        };
      case 'closing-soon':
        return {
          background: 'linear-gradient(135deg, #f59e0b, #d97706)',
          color: 'white',
          icon: '🟡'
        };
      case 'opening-soon':
        return {
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          color: 'white',
          icon: '🔵'
        };
      case 'holiday':
        return {
          background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
          color: 'white',
          icon: '🎄'
        };
      case 'special':
        return {
          background: 'linear-gradient(135deg, #ec4899, #db2777)',
          color: 'white',
          icon: '⭐'
        };
      default:
        return {
          background: 'linear-gradient(135deg, #ef4444, #dc2626)',
          color: 'white',
          icon: '🔴'
        };
    }
  };

  if (!currentStatus) return null;

  const style = getStatusStyle();

  return (
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: style.background,
      color: style.color,
      padding: '0.75rem 0',
      textAlign: 'center',
      fontSize: '0.9rem',
      fontWeight: '600',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      animation: currentStatus.urgency ? 'pulse 2s infinite' : 'slideDown 0.5s ease-out'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}>
          <span style={{ fontSize: '1.1rem' }}>{style.icon}</span>
          <strong>{currentStatus.message}</strong>
          {currentStatus.description && (
            <>
              <span>•</span>
              <span style={{ opacity: 0.9 }}>{currentStatus.description}</span>
            </>
          )}
          <span style={{ opacity: 0.7, fontSize: '0.8rem', marginLeft: '0.5rem' }}>
            🕐 {currentTime.toLocaleTimeString('no-NO', { 
              hour: '2-digit', 
              minute: '2-digit',
              timeZone: 'Europe/Oslo'
            })}
          </span>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @media (max-width: 768px) {
          .container > div {
            font-size: 0.8rem;
            gap: 0.3rem;
          }
        }
      `}</style>
    </div>
  );
}
