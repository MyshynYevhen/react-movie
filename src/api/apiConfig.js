const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a199a106734f36541a97c89e908b102a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;