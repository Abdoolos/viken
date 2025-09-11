import { useState } from 'react';
import settings from "../content/settings.json";

export default function Announcement() {
  const [isVisible, setIsVisible] = useState(true);
  const announcement = settings.announcement;

  // إذا كان الإعلان غير مفعل، لا نعرض شيء
  if (!announcement.enabled) return null;

  // التحقق من التواريخ إذا كانت محددة
  const now = new Date();
  if (announcement.startDate && announcement.endDate) {
    const startDate = new Date(announcement.startDate);
    const endDate = new Date(announcement.endDate);
    const showUntilDate = announcement.showUntil ? new Date(announcement.showUntil) : endDate;
    
    // إذا لم يحن وقت الإعلان بعد أو انتهى وقت عرضه
    if (now < startDate || now > showUntilDate) {
      return null;
    }
  }

  // إذا اختار المستخدم إخفاء الإعلان
  if (!isVisible) return null;

  // تحديد نوع الإعلان والتصميم المناسب
  const getAnnouncementStyle = () => {
    switch (announcement.type) {
      case 'travel':
        return {
          background: 'linear-gradient(135deg, var(--cl-secondary), #f97316)',
          icon: '✈️',
          color: 'white'
        };
      case 'closed':
        return {
          background: 'linear-gradient(135deg, #ef4444, #dc2626)',
          icon: '🚫',
          color: 'white'
        };
      case 'special':
        return {
          background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
          icon: '⭐',
          color: 'white'
        };
      case 'info':
        return {
          background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
          icon: '💡',
          color: 'white'
        };
      default:
        return {
          background: 'linear-gradient(135deg, var(--cl-primary), var(--cl-accent))',
          icon: '📢',
          color: 'white'
        };
    }
  };

  const style = getAnnouncementStyle();

  return (
    <div style={{
      background: style.background,
      color: style.color,
      padding: '1rem 0',
      position: 'relative',
      overflow: 'hidden',
      animation: 'slideDown 0.5s ease-out'
    }}>
      {/* تأثير الخلفية المتحركة */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
        animation: 'shine 4s infinite'
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '1.1rem',
            fontWeight: '600'
          }}>
            <span style={{ 
              fontSize: '1.5rem',
              animation: 'bounce 2s infinite'
            }}>
              {style.icon}
            </span>
            <span>{announcement.title}</span>
          </div>
          
          <div style={{
            fontSize: '1rem',
            maxWidth: '600px'
          }}>
            {announcement.message}
          </div>

          {/* عرض التواريخ إذا كانت محددة */}
          {announcement.startDate && announcement.endDate && (
            <div style={{
              fontSize: '0.9rem',
              opacity: 0.9,
              fontWeight: '500',
              background: 'rgba(255,255,255,0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              margin: '0.5rem 0'
            }}>
              📅 {new Date(announcement.startDate).toLocaleDateString('no-NO')} - {new Date(announcement.endDate).toLocaleDateString('no-NO')}
            </div>
          )}
          
          {/* زر الإغلاق */}
          <button
            onClick={() => setIsVisible(false)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: style.color,
              padding: '0.5rem',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.2rem',
              width: '35px',
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              marginLeft: 'auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.3)';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'scale(1)';
            }}
            title="إغلاق الإعلان"
          >
            ✕
          </button>
        </div>
      </div>

      {/* الأنماط المتحركة */}
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
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }
        
        @media (max-width: 768px) {
          .container > div {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
