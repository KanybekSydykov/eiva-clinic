const BASE_URL = 'https://eiva.tatadev.pro/';

export const ENDPOINTS = {
    // v1
    getMainPage : () => BASE_URL + 'v1/pages/main',
    getContacts : () => BASE_URL + 'v1/pages/contacts',
    getAboutUs : () => BASE_URL + 'v1/pages/about',
    getWelcome: () => BASE_URL + 'v1/pages/welcome',
    getDocs:() => BASE_URL + 'v1/pages/documents',

    // v2
    getAboutPageAbout: () => BASE_URL + 'v2/pages/about/abuout-us',
    getFaq: () => BASE_URL + 'v2/pages/about/faq',
    getGallery: () => BASE_URL + 'v2/pages/about/gallery',
    getAboutServices: () => BASE_URL + 'v2/pages/about/include',
    getAboutFaqs: () => BASE_URL + 'v2/pages/about/faq',
    getPartners: () => BASE_URL + 'v2/pages/about/parents',
    getDotcors: () => BASE_URL + 'doctors/doctors',
    getDoctorInfo: (id: number) => BASE_URL + `doctors/doctors/${id}`,
    getPriceTabCategories: () => BASE_URL + 'prices/categories/',
    getServiceCategories: () => BASE_URL + 'services/services/',
    getPrices: () => BASE_URL + 'prices/preiskurant',
    getService:(slug: string) => BASE_URL + `services/services/${slug}/`,
    postApplication:() => BASE_URL + 'doctors/order/',
    getBirthCounter: () => BASE_URL + 'v2/pages/main/birth-counter/',
    getFormBackgrounds: () => BASE_URL + 'v2/pages/bg-images/gallery/',
}