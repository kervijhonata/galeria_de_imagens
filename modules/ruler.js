function ruler () {
    let props = {}
    props.painel = document.createElement('div');
    props.painel.style.minWidth = "140px";
    props.painel.style.minHeight = "80px";
    props.painel.style.backgroundColor = "green";
    props.painel.style.border = "6px double red";
    props.painel.style.color = "white";
    props.painel.style.zIndex = "10";
    props.painel.style.position = "fixed";
    props.painel.style.top = "0px";
    props.painel.style.right = "0px";


    function watch() {
        props.width = window.innerWidth;
        props.height = window.innerHeight;
        props.painel.innerHTML = `
            <h2>W: ${props.width}px</h2>
            <br>
            <h2>H: ${props.height}px</h2>
        `;

        document.body.append(props.painel);
        
        window.addEventListener('resize', function getSizes(){
            props.width = window.innerWidth;
            props.height = window.innerHeight;
            props.painel.innerHTML = `
                <h2>W: ${props.width}px</h2>
                <br>
                <h2>H: ${props.height}px</h2>
            `;
        });
    }

    

    return {
        props,
        watch
    }
}
export default ruler;