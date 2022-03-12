export const Greetings = ({lang,children}) => {
    const greetings = {
        de:'Hallo',
        en: 'Hello',
        es: 'Bon Dia',
        fr: 'Bonjour'
    }
    let greeting = !greetings[lang] ? greetings['en'] : greetings[lang];
    return (
        <h2>{greeting}, {children}</h2>
    )
}