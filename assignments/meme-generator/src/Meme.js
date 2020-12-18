export function Meme(props) {
    return (
        <div
            className="meme"
            style={{
                backgroundImage: `url(${props.meme.image.url}) `
            }}>
            <p className="top-text">{props.meme.topText}</p>
            <p className="bottom-text">{props.meme.bottomText}</p>
        </div>
    )
}
