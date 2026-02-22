// מסד נתונים של ספרים לפי כיתה
const booksDatabase = {
    'א': [
        { name: 'ספר הקריאה הראשון', subject: 'עברית', price: 45, type: 'מכירה', class: 'א', group: null },
        { name: 'מתמטיקה לתינוקות', subject: 'מתמטיקה', price: 50, type: 'מכירה', class: 'א', group: 'א' },
        { name: 'מדע ומסקרנות', subject: 'מדע', price: 40, type: 'השכרה', class: 'א', group: null },
    ],
    'ב': [
        { name: 'עברית לכיתה ב', subject: 'עברית', price: 55, type: 'מכירה', class: 'ב', group: null },
        { name: 'מתמטיקה כיתה ב', subject: 'מתמטיקה', price: 60, type: 'מכירה', class: 'ב', group: 'א' },
        { name: 'מדע כיתה ב', subject: 'מדע', price: 45, type: 'השכרה', class: 'ב', group: null },
        { name: 'אנגלית לתחילה', subject: 'אנגלית', price: 50, type: 'מכירה', class: 'ב', group: 'א' },
    ],
    'ג': [
        { name: 'עברית כיתה ג', subject: 'עברית', price: 65, type: 'מכירה', class: 'ג', group: null },
        { name: 'מתמטיקה כיתה ג', subject: 'מתמטיקה', price: 70, type: 'מכירה', class: 'ג', group: 'א' },
        { name: 'מדע כיתה ג', subject: 'מדע', price: 55, type: 'השכרה', class: 'ג', group: null },
        { name: 'אנגלית כיתה ג', subject: 'אנגלית', price: 60, type: 'מכירה', class: 'ג', group: 'ב' },
        { name: 'היסטוריה כיתה ג', subject: 'היסטוריה', price: 50, type: 'השכרה', class: 'ג', group: null },
    ],
    'ד': [
        { name: 'עברית כיתה ד', subject: 'עברית', price: 75, type: 'מכירה', class: 'ד', group: null },
        { name: 'מתמטיקה כיתה ד', subject: 'מתמטיקה', price: 80, type: 'מכירה', class: 'ד', group: 'ב' },
        { name: 'מדע כיתה ד', subject: 'מדע', price: 65, type: 'השכרה', class: 'ד', group: null },
        { name: 'אנגלית כיתה ד', subject: 'אנגלית', price: 70, type: 'מכירה', class: 'ד', group: 'א' },
    ],
    'ה': [
        { name: 'עברית כיתה ה', subject: 'עברית', price: 85, type: 'מכירה', class: 'ה', group: null },
        { name: 'מתמטיקה כיתה ה', subject: 'מתמטיקה', price: 90, type: 'מכירה', class: 'ה', group: 'ב' },
        { name: 'מדע כיתה ה', subject: 'מדע', price: 75, type: 'השכרה', class: 'ה', group: null },
        { name: 'אנגלית כיתה ה', subject: 'אנגלית', price: 80, type: 'מכירה', class: 'ה', group: 'א' },
        { name: 'הסטוריה כיתה ה', subject: 'היסטוריה', price: 70, type: 'מכירה', class: 'ה', group: null },
    ],
    'ו': [
        { name: 'עברית כיתה ו', subject: 'עברית', price: 95, type: 'מכירה', class: 'ו', group: null },
        { name: 'מתמטיקה כיתה ו', subject: 'מתמטיקה', price: 100, type: 'מכירה', class: 'ו', group: 'ב' },
        { name: 'אנגלית כיתה ו', subject: 'אנגלית', price: 90, type: 'מכירה', class: 'ו', group: 'א' },
        { name: 'מדע כיתה ו', subject: 'מדע', price: 85, type: 'השכרה', class: 'ו', group: null },
    ],
    'ז': [
        { name: 'עברית כיתה ז', subject: 'עברית', price: 105, type: 'מכירה', class: 'ז', group: null },
        { name: 'מתמטיקה כיתה ז', subject: 'מתמטיקה', price: 110, type: 'מכירה', class: 'ז', group: 'א' },
        { name: 'אנגלית כיתה ז', subject: 'אנגלית', price: 100, type: 'מכירה', class: 'ז', group: 'ב' },
        { name: 'מדע כיתה ז', subject: 'מדע', price: 95, type: 'השכרה', class: 'ז', group: null },
    ],
    'ח': [
        { name: 'עברית כיתה ח', subject: 'עברית', price: 115, type: 'מכירה', class: 'ח', group: null },
        { name: 'מתמטיקה כיתה ח', subject: 'מתמטיקה', price: 120, type: 'מכירה', class: 'ח', group: 'ב' },
        { name: 'אנגלית כיתה ח', subject: 'אנגלית', price: 110, type: 'מכירה', class: 'ח', group: 'א' },
        { name: 'פיזיקה כיתה ח', subject: 'פיזיקה', price: 105, type: 'מכירה', class: 'ח', group: null },
    ],
    'ט': [
        { name: 'עברית כיתה ט', subject: 'עברית', price: 125, type: 'מכירה', class: 'ט', group: null },
        { name: 'מתמטיקה כיתה ט', subject: 'מתמטיקה', price: 130, type: 'מכירה', class: 'ט', group: 'א' },
        { name: 'אנגלית כיתה ט', subject: 'אנגלית', price: 120, type: 'מכירה', class: 'ט', group: 'ב' },
        { name: 'פיזיקה כיתה ט', subject: 'פיזיקה', price: 115, type: 'מכירה', class: 'ט', group: null },
    ],
    'י': [
        { name: 'עברית כיתה י', subject: 'עברית', price: 135, type: 'מכירה', class: 'י', group: null },
        { name: 'מתמטיקה כיתה י', subject: 'מתמטיקה', price: 140, type: 'מכירה', class: 'י', group: 'ב' },
        { name: 'אנגלית כיתה י', subject: 'אנגלית', price: 130, type: 'מכירה', class: 'י', group: 'א' },
        { name: 'פיזיקה כיתה י', subject: 'פיזיקה', price: 125, type: 'מכירה', class: 'י', group: null },
    ],
    'יא': [
        { name: 'עברית כיתה יא', subject: 'עברית', price: 145, type: 'מכירה', class: 'יא', group: null },
        { name: 'מתמטיקה כיתה יא', subject: 'מתמטיקה', price: 150, type: 'מכירה', class: 'יא', group: 'א' },
        { name: 'אנגלית כיתה יא', subject: 'אנגלית', price: 140, type: 'מכירה', class: 'יא', group: 'ב' },
        { name: 'פיזיקה כיתה יא', subject: 'פיזיקה', price: 135, type: 'מכירה', class: 'יא', group: null },
    ],
    'יב': [
        { name: 'עברית כיתה יב', subject: 'עברית', price: 155, type: 'מכירה', class: 'יב', group: null },
        { name: 'מתמטיקה כיתה יב', subject: 'מתמטיקה', price: 160, type: 'מכירה', class: 'יב', group: 'ב' },
        { name: 'אנגלית כיתה יב', subject: 'אנגלית', price: 150, type: 'מכירה', class: 'יב', group: 'א' },
        { name: 'פיזיקה כיתה יב', subject: 'פיזיקה', price: 145, type: 'מכירה', class: 'יב', group: null },
    ]
};

// מסד נתונים של חוגים עם מטא-דאטה
const clubsDatabase = [
    { 
        name: 'ספורט וכושר', 
        days: ['ראשון', 'רביעי'], 
        grades: ['ה', 'ו', 'ז', 'ח', 'ט'],
        type: 'ספורט',
        price: 50
    },
    { 
        name: 'אומנות ותכנון', 
        days: ['שני', 'חמישי'], 
        grades: ['א', 'ב', 'ג', 'ד', 'ה', 'ו'],
        type: 'אומנות',
        price: 45
    },
    { 
        name: 'מוזיקה ושירה', 
        days: ['שני', 'חמישי'], 
        grades: ['ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'יא', 'יב'],
        type: 'מוזיקה',
        price: 60
    },
    { 
        name: 'מדע וטכנולוגיה', 
        days: ['ראשון', 'רביעי'], 
        grades: ['ו', 'ז', 'ח', 'ט', 'י', 'יא', 'יב'],
        type: 'מדע',
        price: 70
    },
    { 
        name: 'מדעי המחשב', 
        days: ['שלישי', 'שישי'], 
        grades: ['ה', 'ו', 'ז', 'ח', 'ט', 'י', 'יא', 'יב'],
        type: 'מחשבים',
        price: 75
    },
    { 
        name: 'דרמה ותיאטרון', 
        days: ['שלישי'], 
        grades: ['ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'יא', 'יב'],
        type: 'דרמה',
        price: 55
    },
    { 
        name: 'קריאה וספרות', 
        days: ['ראשון'], 
        grades: ['א', 'ב', 'ג', 'ד', 'ה', 'ו'],
        type: 'קריאה',
        price: 40
    },
    { 
        name: 'שחמט וחשיבה אסטרטגית', 
        days: ['שלישי', 'שישי'], 
        grades: ['ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'יא', 'יב'],
        type: 'שחמט',
        price: 50
    }
];

// פילטור חוגים
function applyFilters() {
    const dayFilter = document.getElementById('day-filter').value;
    const gradeFilter = document.getElementById('grade-filter').value;
    const typeFilter = document.getElementById('type-filter').value;
    
    const clubCards = document.querySelectorAll('.club-card');
    let visibleCount = 0;
    
    clubCards.forEach(card => {
        const header = card.querySelector('.club-header h3');
        const clubName = header.textContent;
        
        // חפש את החוג בבסיס הנתונים
        const club = clubsDatabase.find(c => clubName.includes(c.name.split(' ')[0]));
        
        if (!club) return;
        
        let matchDay = !dayFilter || club.days.some(d => d.includes(dayFilter));
        let matchGrade = !gradeFilter || club.grades.some(g => g.includes(gradeFilter));
        let matchType = !typeFilter || club.type.includes(typeFilter);
        
        if (matchDay && matchGrade && matchType) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // הצג הודעה אם אין תוצאות
    const grid = document.querySelector('.clubs-grid');
    let noResults = document.querySelector('.no-results');
    
    if (visibleCount === 0) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = '😔 לא נמצאו חוגים התואמים לבחירתך';
            grid.appendChild(noResults);
        }
    } else {
        if (noResults) {
            noResults.remove();
        }
    }
}

// אפס פילטרים
function resetFilters() {
    document.getElementById('day-filter').value = '';
    document.getElementById('grade-filter').value = '';
    document.getElementById('type-filter').value = '';
    
    document.querySelectorAll('.club-card').forEach(card => {
        card.style.display = 'block';
    });
    
    const noResults = document.querySelector('.no-results');
    if (noResults) {
        noResults.remove();
    }
}
function selectClass(className) {
    const classSelection = document.getElementById('class-selection');
    const booksTableContainer = document.getElementById('books-table-container');
    
    classSelection.style.display = 'none';
    booksTableContainer.style.display = 'block';
    document.getElementById('selected-class').textContent = `כיתה ${className}'`;
    
    displayBooks(className);
}

// חזרה לבחירת כיתה
function backToClasses() {
    document.getElementById('class-selection').style.display = 'block';
    document.getElementById('books-table-container').style.display = 'none';
}

// תצוגת ספרים בטבלה
function displayBooks(className) {
    const books = booksDatabase[className] || [];
    const tbody = document.getElementById('books-tbody');
    tbody.innerHTML = '';
    
    books.forEach((book, index) => {
        // בדיקה אם יש הקבצה לספר זה
        const hasGroup = book.group !== null && (book.subject === 'מתמטיקה' || book.subject === 'אנגלית');
        
        let groupColumn = '';
        if (hasGroup) {
            groupColumn = `
                <select class="type-select group-select" data-book-index="${index}" data-book-class="${className}">
                    <option value="א" ${book.group === 'א' ? 'selected' : ''}>הקבצה א</option>
                    <option value="ב" ${book.group === 'ב' ? 'selected' : ''}>הקבצה ב</option>
                </select>
            `;
        } else {
            groupColumn = '<span style="color: #999;">-</span>';
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.subject}</td>
            <td>${book.price}</td>
            <td>
                <select class="type-select" data-book-index="${index}" data-book-class="${className}">
                    <option value="מכירה" ${book.type === 'מכירה' ? 'selected' : ''}>מכירה</option>
                    <option value="השכרה" ${book.type === 'השכרה' ? 'selected' : ''}>השכרה</option>
                </select>
            </td>
            <td>${groupColumn}</td>
            <td>
                <button class="add-to-cart-btn" onclick="addBookToCart('${book.name}', ${book.price}, '${className}', '${book.subject}', this)">
                    הוסף לסל
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// הוספת ספר לסל
function addBookToCart(bookName, price, className, subject, button) {
    const row = button.closest('tr');
    const typeSelect = row.querySelector('.type-select:not(.group-select)');
    const groupSelect = row.querySelector('.group-select');
    const selectedType = typeSelect ? typeSelect.value : 'מכירה';
    const selectedGroup = groupSelect ? groupSelect.value : null;
    
    const item = {
        id: Math.random(),
        name: bookName,
        price: price,
        class: className,
        subject: subject,
        type: selectedType,
        group: selectedGroup,
        quantity: 1
    };
    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
    
    // אפקט ויזואלי
    button.textContent = '✓ נוסף!';
    button.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
    setTimeout(() => {
        button.textContent = 'הוסף לסל';
        button.style.background = '';
    }, 2000);
    
    alert(`${bookName} נוסף לסל בהצלחה! 🎉`);
}

// עדכון תצוגת סל הקניות
function updateCartCount() {
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartBadge.textContent = cartItems.length;
    }
}

// הוספת חוג לסל
function addClubToCart(clubName, price) {
    const item = {
        id: Math.random(),
        name: clubName,
        price: price,
        type: 'חוג',
        quantity: 1
    };
    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
    
    alert(`${clubName} נוסף לסל בהצלחה! 🎉`);
}

// Smooth scroll ל-sections כאשר לוחצים על הקישורים
document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// עדכון הסל בעת טעינת הדף
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    initializeSchedule();
});

// אתחול אינטראקציות לוח הזמנים
function initializeSchedule() {
    const clubSlots = document.querySelectorAll('.club-slot');
    clubSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            const clubName = this.getAttribute('data-club');
            highlightClub(clubName);
            scrollToClub(clubName);
        });
    });
}

// הדגשת חוג בטבלה
function highlightClub(clubName) {
    // הסר הדגשה קודמת
    document.querySelectorAll('.club-slot').forEach(slot => {
        slot.style.opacity = '0.6';
    });
    
    // הדגש את החוג הנבחר
    document.querySelectorAll('.club-slot').forEach(slot => {
        if (slot.getAttribute('data-club') === clubName) {
            slot.style.opacity = '1';
            slot.style.transform = 'scale(1.15)';
        }
    });
}

// גלול לכרטיס החוג
function scrollToClub(clubName) {
    const clubCards = document.querySelectorAll('.club-card');
    clubCards.forEach(card => {
        const header = card.querySelector('.club-header h3');
        if (header && header.textContent.includes(clubName.split(' ')[0])) {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            card.style.borderColor = '#667eea';
            card.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.5)';
            setTimeout(() => {
                card.style.borderColor = 'transparent';
                card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
            }, 3000);
        }
    });
}

// פונקציה לנקות את הסל
function clearCart() {
    localStorage.removeItem('cartItems');
    updateCartCount();
    alert('הסל נוקה בהצלחה');
}

// פונקציה לקבלת פריטי הסל
function getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

// ========== CONTACT PAGE FUNCTIONS ==========

// פונקציה לשליחת הודעה (דמויה)
function sendMessage(event) {
    event.preventDefault();

    // קבלת נתוני הטופס
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    // בדיקת תקינות
    if (!name || !email || !subject || !message) {
        showErrorMessage('אנא מלא את כל השדות החובה');
        return;
    }

    // בדיקת תקינות אימייל
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showErrorMessage('אנא הכנס אימייל תקין');
        return;
    }

    // יצירת אובייקט ההודעה
    const messageData = {
        id: Date.now(),
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toLocaleString('he-IL'),
        status: 'sent'
    };

    // שמירה ל-localStorage
    let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    messages.push(messageData);
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    // הצגת הודעת הצלחה
    showSuccessMessage(name);

    // ניקוי הטופס
    document.getElementById('contact-form').reset();
}

// פונקציה להצגת הודעת הצלחה
function showSuccessMessage(name) {
    // יצירת רכיב הודעה
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.innerHTML = `
        <h3>✅ הודעה נשלחה בהצלחה!</h3>
        <p>תודה ${name}, נחזור אליך בהקדם.</p>
    `;

    // הוספה לדף
    document.body.appendChild(messageDiv);

    // הסרה לאחר 4 שניות
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            messageDiv.remove();
        }, 500);
    }, 4000);
}

// פונקציה להצגת הודעת שגיאה
function showErrorMessage(errorText) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'success-message';
    messageDiv.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)';
    messageDiv.innerHTML = `
        <h3>❌ שגיאה</h3>
        <p>${errorText}</p>
    `;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            messageDiv.remove();
        }, 500);
    }, 3000);
}

// ========== SHOPPING CART PAGE FUNCTIONS ==========

// אתחול עמוד הסל
function initializeCart() {
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
    }
}

// הצגת פריטי הסל
function displayCartItems() {
    const cartItems = getCartItems();
    const emptyMessage = document.getElementById('empty-cart-message');
    const cartContent = document.getElementById('cart-content');
    
    if (!emptyMessage || !cartContent) return;

    if (cartItems.length === 0) {
        emptyMessage.style.display = 'flex';
        cartContent.style.display = 'none';
    } else {
        emptyMessage.style.display = 'none';
        cartContent.style.display = 'block';
        
        const tableBody = document.getElementById('cart-items-table');
        tableBody.innerHTML = '';
        
        let totalPrice = 0;
        
        cartItems.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <span class="item-name">${item.name}</span>
                    ${item.class ? `<span class="item-class">כיתה ${item.class}</span>` : ''}
                    ${item.subject ? `<span class="item-subject">${item.subject}</span>` : ''}
                </td>
                <td class="item-type">${item.type || 'N/A'}</td>
                <td class="item-price">${item.price} ₪</td>
                <td>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="decreaseQuantity(${index})">-</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="increaseQuantity(${index})">+</button>
                    </div>
                </td>
                <td class="item-total">${itemTotal} ₪</td>
                <td class="cart-actions-cell">
                    <button class="delete-btn" onclick="removeFromCart(${index})">🗑️ מחק</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        // עדכון סיכום
        document.getElementById('total-items').textContent = cartItems.length;
        document.getElementById('total-price').textContent = totalPrice + ' ₪';
    }
}

// הגדלת כמות פריט
function increaseQuantity(index) {
    const cartItems = getCartItems();
    if (cartItems[index]) {
        cartItems[index].quantity = (cartItems[index].quantity || 1) + 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCartItems();
        updateCartCount();
    }
}

// הקטנת כמות פריט
function decreaseQuantity(index) {
    const cartItems = getCartItems();
    if (cartItems[index] && cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCartItems();
        updateCartCount();
    }
}

// הסרת פריט מהסל
function removeFromCart(index) {
    const cartItems = getCartItems();
    const itemName = cartItems[index].name;
    
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    showSuccessMessage(`${itemName} הוסר מהסל בהצלחה`);
    displayCartItems();
    updateCartCount();
}

// ניקוי הסל כולו
function clearCartItems() {
    if (confirm('האם אתה בטוח שברצונך לנקות את הסל?')) {
        localStorage.removeItem('cartItems');
        updateCartCount();
        displayCartItems();
        showSuccessMessage('הסל נוקה בהצלחה');
    }
}

// המשך קניות
function continueShopping() {
    window.location.href = 'bookstore.html';
}

// המשך לתשלום
function proceedToCheckout() {
    const cartItems = getCartItems();
    
    if (cartItems.length === 0) {
        showErrorMessage('סל הקניות שלך ריק');
        return;
    }
    
    // חישוב סכום כולל
    const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // יצירת אובייקט הזמנה
    const order = {
        id: Date.now(),
        items: cartItems,
        totalAmount: totalAmount,
        orderDate: new Date().toLocaleString('he-IL'),
        status: 'pending',
        paymentMethod: null
    };
    
    // שמירה של הזמנה ל-localStorage
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // הצגת דף בחירת תשלום
    showCheckoutModal(order);
}

// הצגת חלון תשלום
function showCheckoutModal(order) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3000;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 40px;
        max-width: 500px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        text-align: center;
        animation: slideInUp 0.5s ease;
    `;
    
    const totalAmount = order.totalAmount;
    
    modalContent.innerHTML = `
        <div style="font-size: 48px; margin-bottom: 20px;">💳</div>
        <h2 style="color: #667eea; margin-bottom: 15px; font-size: 28px;">בחר שיטת תשלום</h2>
        <p style="color: #666; margin-bottom: 30px; font-size: 16px;">סה"כ לתשלום: <strong style="color: #43e97b; font-size: 24px;">${totalAmount} ₪</strong></p>
        
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 25px;">
            <button onclick="completePayment('credit-card', this)" class="checkout-payment-btn" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                💳 כרטיס אשראי
            </button>
            <button onclick="completePayment('paypal', this)" class="checkout-payment-btn" style="background: linear-gradient(135deg, #0070ba 0%, #003087 100%); color: white; padding: 15px; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                🅿️ PayPal
            </button>
            <button onclick="completePayment('bank-transfer', this)" class="checkout-payment-btn" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                🏦 העברה בנקאית
            </button>
        </div>
        
        <button onclick="this.closest('div').remove()" style="background: #e0e0e0; color: #333; padding: 12px 24px; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
            ❌ ביטול
        </button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // הוספת スタイל עבור hover
    const buttons = modalContent.querySelectorAll('.checkout-payment-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
            btn.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = 'none';
        });
    });
}

// השלמת תשלום
function completePayment(method, button) {
    button.disabled = true;
    button.textContent = '⏳ מעבד...';
    
    setTimeout(() => {
        const cartItems = getCartItems();
        const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        // עדכון סטטוס הזמנה
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        const lastOrder = orders[orders.length - 1];
        lastOrder.status = 'completed';
        lastOrder.paymentMethod = method;
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // ניקוי סל
        localStorage.removeItem('cartItems');
        updateCartCount();
        
        // סגירת מודאל וחזרה לעמוד הסל
        const modal = button.closest('div').parentElement;
        modal.style.animation = 'slideOutRight 0.5s ease';
        
        setTimeout(() => {
            modal.remove();
            displaySuccessOrder(lastOrder);
        }, 500);
    }, 1500);
}

// הצגת הזמנה מוצלחת
function displaySuccessOrder(order) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 20px;
        padding: 50px;
        max-width: 500px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        animation: slideInUp 0.5s ease;
    `;
    
    const paymentMethods = {
        'credit-card': '💳 כרטיס אשראי',
        'paypal': '🅿️ PayPal',
        'bank-transfer': '🏦 העברה בנקאית'
    };
    
    messageDiv.innerHTML = `
        <div style="font-size: 72px; margin-bottom: 20px;">✅</div>
        <h2 style="color: #43e97b; font-size: 32px; margin-bottom: 15px;">ההזמנה בוצעה בהצלחה!</h2>
        <p style="color: #666; font-size: 16px; margin-bottom: 15px;">תודה על הקנייה שלך</p>
        
        <div style="background: #f8f9ff; border-radius: 12px; padding: 20px; margin-bottom: 25px; text-align: right;">
            <p style="color: #666; margin-bottom: 10px;"><strong>מספר הזמנה:</strong> #${order.id}</p>
            <p style="color: #666; margin-bottom: 10px;"><strong>סכום כולל:</strong> ${order.totalAmount} ₪</p>
            <p style="color: #666; margin-bottom: 10px;"><strong>שיטת תשלום:</strong> ${paymentMethods[order.paymentMethod] || 'N/A'}</p>
            <p style="color: #666;"><strong>תאריך הזמנה:</strong> ${order.orderDate}</p>
        </div>
        
        <button onclick="window.location.href='index.html'" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; border: none; border-radius: 10px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; width: 100%;">
            🏠 חזור לעמוד הבית
        </button>
    `;
    
    document.body.appendChild(messageDiv);
    
    // סגירה אוטומטית לאחר 5 שניות
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            messageDiv.remove();
            window.location.href = 'index.html';
        }, 500);
    }, 5000);
}

// אתחול הסל בטעינת הדף
document.addEventListener('DOMContentLoaded', () => {
    initializeCart();
    updateCartCount();
});
