export function MemoSearch({originalLink, shortLink}) {
    
    const resetButton  = () => {
        document.querySelectorAll('.buttoncopy--copied').forEach(buttoncopy => {
            buttoncopy.innerText = 'Copy';
            buttoncopy.classList.replace('buttoncopy--copied', 'buttoncopy')
        })
    }

    const CopyButtonDataandChange = (event) => {
        navigator.clipboard.writeText(event.target.dataset.copy);
        resetButton();
        event.target.innerText = 'Copied!';
        event.target.className = 'buttoncopy--copied';
    }
    

    
    // Cambiar active/no active si se clica el botón

    return(
        <section className="memosearch__wrapper">
            <section className="memoSearch">
            <p className="url">
                {originalLink}
            </p>
            <div className="memoSearch__info">
                <p className="urlShort">
                    {shortLink}
                </p>
                <button 
                data-copy={shortLink}
                onClick={event => CopyButtonDataandChange(event)}
                type='button' 
                className='buttoncopy' 
                >Copy
                </button>
            </div>
        </section>
        </section>
        
    )
}