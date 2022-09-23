export const CATEGORIES = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Business'},
    { value: 'entertainment', label: 'Entertainment'},
    { value: 'health', label: 'Health'},
    { value: 'science', label: 'Science'},
    { value: 'sports', label: 'Sports'},
    { value: 'technology', label: 'Technology'}
]


export const generateUniqueId = () => {
    
    const random = Math.random().toString(20).substring(2)
    const dateTime = Date.now().toString(20)

    return random + dateTime

}