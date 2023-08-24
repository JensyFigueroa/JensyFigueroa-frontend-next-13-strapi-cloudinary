export const formatDate = (dateString: string) => { 
    const date = new Date(dateString);
    // Intl.DateTimeFormatOptions es una interfaz de Javascript que representa las opciones de las fechas
    const options: Intl.DateTimeFormatOptions = {
        year:"numeric",
        month:"long",
        day:"numeric"
    }
    return date.toLocaleDateString("es", options)
 }