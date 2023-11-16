const ImageCard = (props) => {
    const {src} = props
    return (
        <img src={src} style={{ width: '100%', height: 'auto'}}/>
    )
}

export default ImageCard