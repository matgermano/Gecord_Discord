import appConfig from "../config.json";

function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

function Titulo(props){
    const Tag = props.tag;
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag}{
                    color: ${appConfig.theme.colors.neutrals['100']}
                }
            `}</style>
        </>
    );
};  

function HomePage() {
    return (
    <div>
        <GlobalStyle/>
        <Titulo tag='h2' >Bem vindo ao Gecord!</Titulo>
        <h2>Discord - Developer Germano</h2>
    </div>
    )}
  
  export default HomePage