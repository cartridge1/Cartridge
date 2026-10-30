/* ملف الأسعار والعروض والصور — عدّل هنا بس. لازم يفضل جنب index.html
   Prices, deals & images: edit this file only. */
window.PRICES = {
  usdRate: 69, /* 1 دولار = كام جنيه */

  /* سعر ثابت لكارت: 'القسم-البلد-القيمة': السعر. مثال 'ps-us-25': 1700
     الأقسام: ps xb st ap gp nt | البلاد: us ae qa om sa */
  cards: {},

  /* أسعار الألعاب لكل نوع حساب: 'اسم اللعبة|ps5|primary': السعر
     أو 'اسم اللعبة|ps4|secondary': السعر. (اسم اللعبة زي ما هو مكتوب في القايمة)
     مثال: 'God of War Ragnarök|ps5|primary': 900  */
  games: {},

  /* الشحن والاشتراكات: 'المعرّف|رقم القيمة (من 0)': السعر. المعرّفات: pubg ff rbx gpass psplus eaplay */
  extras: {},

  /* الصور: ضع الصورة في مجلد images وسجّلها هنا باسم اللعبة. مثال:
     'God of War Ragnarök': 'images/gow-ragnarok.jpg'  */
  img: {},

  /* خصومات الألعاب (أول حاجة في الرئيسية). الأرقام دي تجريبية — غيّرها أو امسحها.
     n اسم اللعبة | pl: ps4 أو ps5 | ty: primary أو secondary | was قبل | now بعد | ends نهاية الخصم */
  deals: [
    {n:'God of War Ragnarök', pl:'ps5', ty:'primary',   was:1200, now:900, ends:'2026-11-30T23:59:00'},
    {n:'Spider-Man 2',        pl:'ps5', ty:'secondary', was:900,  now:650, ends:'2026-11-25T23:59:00'},
    {n:'Red Dead Redemption 2', pl:'ps4', ty:'primary', was:700,  now:480, ends:'2026-11-28T23:59:00'},
    {n:'EA Sports FC 26',     pl:'ps5', ty:'secondary', was:1100, now:850, ends:'2026-12-05T23:59:00'}
  ],

  /* عروض الرئيسية (بنرات). img اختياري: صورة خلفية */
  offers: [
    {badge:{ar:'الأكثر طلباً',en:'Most popular'}, t:{ar:'كارت بلايستيشن 50$ أمريكا',en:'PlayStation $50 card (USA)'}, s:{ar:'سعر واضح بالجنيه',en:'Clear EGP price'}, go:'ps', big:'PS', was:3450, now:3300, ends:'2026-11-30T23:59:00'},
    {badge:{ar:'جديد',en:'New'}, t:{ar:'ألعاب PS5',en:'PS5 games'}, s:{ar:'Primary و Secondary',en:'Primary & Secondary'}, go:'ps5', big:'PS5'},
    {badge:{ar:'شحن سريع',en:'Fast top-up'}, t:{ar:'ببجي وفري فاير وروبلوكس',en:'PUBG, Free Fire & Roblox'}, s:{ar:'اطلب وهنرد فوراً',en:'Order and we reply fast'}, go:'topup', big:'UC'},
    {badge:{ar:'اشتراكات',en:'Subscriptions'}, t:{ar:'جيم باس وPS Plus',en:'Game Pass & PS Plus'}, s:{ar:'اشتراكات بأكواد رقمية',en:'Digital-code subscriptions'}, go:'sub', big:'+'}
  ]
};
