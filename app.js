// Le cookie expirera dans 24h, exprimées en millisecondes !
// 1 jour = 86400000 millisecondes.
let date = newDate(date.now() + 86400000);
document.cookie = "theme=dark; path=/; domain=localhost; max-age=86400000; samesite=strict";
console.log(document.cookie);


/**
 * Récupère tous les cookies.
 * @returns {string[]}
 */
function getCookies() {
    return document.cookie.split(" ").map(cookie => cookie.trim());
}


/**
 * TODO Cette fonction doit permettre de créer un nouveau cookie avec le nom et la valeur au choix !
 * @param cookieName
 * @param cookieValue
 */
function setCookie(cookieName, cookieValue) {
    // Le cookie doit être valide 2 jours et doit respecter les normes de sécurité contre les failles CSRF.
    // Votre code ici.
    document.cookie = "theme = light; path=/; domain = localhost; max-age = 172800000; samesite = strict";
}
setCookie(myCookie,5);

/**
 * TODO Cette fonction doit retourner la valeur du nom du cookie passé en paramètre.
 * @param cookieName
 */
function getCookie(cookieName) {
    // Votre code ici.
    return setCookie();
}
getCookie(setCookie());

console.log(getCookies());

// FIXME Test de setCookie()
setCookie('monCookie', 'blabla');
console.log(getCookies(setCookie()));

// FIXME test de getCookie(param)
console.log(getCookies('Où est mon cookie?'));