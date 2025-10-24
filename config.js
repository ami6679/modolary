// ==========================================
// קובץ הגדרות ללקוח - config.js
// ==========================================
// כל ההגדרות של הלקוח בקובץ אחד!
// פשוט ערוך את הערכים למטה ושמור.

const CLIENT_CONFIG = {
  
  // 🏢 פרטי העסק
  businessName: "קארין ניילס",
  adminTitle: "ניהול תורים",
  
  // 🎨 צבעים (הכנס קודי צבע או שמות)
  colors: {
    primary: "#ec4899",    // ורוד ראשי
    secondary: "#8b5cf6",  // סגול משני
    accent: "#f59e0b"      // צהוב/כתום להדגשות
  },
  
  // 🔐 אבטחה
  initialPassword: "1234",              // הסיסמה הראשונית (ניתן לשנות בממשק)
  masterPassword: "MASTER2024",         // ⚠️ סיסמת מאסטר - שנה אותה מיד!
  
  // 🔥 Firebase Configuration
  firebase: {
    apiKey: "AIzaSyD0EucH4JhkNmswRhR1YHvqE2Ni6kgBG0s",
    authDomain: "karinnails.firebaseapp.com",
    projectId: "karinnails",
    storageBucket: "karinnails.firebasestorage.app",
    messagingSenderId: "755206948734",
    appId: "1:755206948734:web:cf6e62c766a75a84a95e5a",
    measurementId: "G-TFSWKVQKJZ"
  },
  
  // 💅 שירותים (אופציונלי - לעתיד)
  services: [
    "מניקור רגיל",
    "מניקור ג'ל",
    "פדיקור",
    "בניית ציפורניים",
    "הסרת ג'ל"
  ],
  
  // 📱 הגדרות כלליות
  settings: {
    showServicesInBooking: false,  // להציג רשימת שירותים בטופס קביעת תור?
    requireApproval: true,          // תורים דורשים אישור?
    timezone: "Asia/Jerusalem"      // אזור זמן
  },
  
  // 💬 הודעות מותאמות אישית
  messages: {
    welcomeTitle: "קבעי תור עכשיו!",
    welcomeText: "מלאי את הפרטים ונחזור אליך בהקדם",
    successMessage: "התור נקבע בהצלחה! ✨",
    pendingMessage: "התור נשלח לאישור. נחזור אליך בהקדם 💅",
    adminTitle: "ניהול תורים"
  }

};

// Make config available globally
if (typeof window !== 'undefined') {
  window.CLIENT_CONFIG = CLIENT_CONFIG;
}