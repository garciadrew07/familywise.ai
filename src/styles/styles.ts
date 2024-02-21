import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #F2F7FF;
        overflow-x: hidden;
    }

    a:hover {
        color: #4484F0;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #11142D;
        white-space: pre-wrap;
        overflow: visible;
        font-family: 'Motiva Sans Light';
        font-size: 54px;
        font-weight: 600;
        color: rgba(17, 20, 45, 1);
        line-height: 1.2;
        border-radius: 0px;
        -moz-border-radius: 0px;
        opacity: 1;
        align-self: flex-start;
        min-width: 0px;
        order: 2;
        min-height: 116px;
        height: max-content;
        flex-grow: 0;
        flex-shrink: 0;
        width: calc(100% - 0px);
        margin-left: 0px;
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        z-index: 5;



        //  font-size: 46px;
        // // line-height: 1.18;

        // letter-spacing: .015em;
        // margin-top: 0;
        // margin-bottom: 0;
        // font-family: proxima-soft,sans-serif;
        // // font-size: 7.2rem;
        // font-weight: 700;
        // line-height: 1;



        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    .introText {
        color: #11142D;
        white-space: pre-wrap;
        overflow: visible;
        font-family: 'Nunito Sans', sans-serif;
        font-size: 54px;
        font-weight: 500;
        color: rgba(17, 20, 45, 1);
        line-height: 1.2;
        border-radius: 0px;
        -moz-border-radius: 0px;
        opacity: 1;
        align-self: flex-start;
        min-width: 0px;
        order: 2;
        min-height: 116px;
        height: max-content;
        flex-grow: 0;
        flex-shrink: 0;
        width: calc(100% - 0px);
        margin-left: 0px;
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        z-index: 5;
    }

    p {
        color: #818091;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    @font-face {
        font-family: "Material Icons";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(/static/fonts/MaterialIcons-Regular.woff2) format("woff2"), url(/static/fonts/MaterialIcons-Regular.ttf) format("truetype");
      }
      @font-face {
        font-family: "Material Icons Outline";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(/static/fonts/MaterialIcons-Outlined.woff2) format("woff2"), url(/static/fonts/MaterialIconsOutlined-Regular.otf) format("opentype");
      }
      .material-icons {
        font-family: "Material Icons";
      }
      
      .material-icons-outline {
        font-family: "Material Icons Outline";
      }

      .blueBackground     
            overflow: visible;
            justify-content: center;
            border-radius: 20px;
            -moz-border-radius: 20px;
            padding: 0px 20px 0px 20px;
            opacity: 1;
            align-self: center;
            min-width: 0px;
            max-width: 1200px;
            order: 1;
            min-height: 557px;
            height: max-content;
            flex-grow: 0;
            flex-shrink: 0;
            width: calc(100% - 0px);
            margin-left: 0px;
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            z-index: 94;
            -webkit-linear-gradient(top, rgb(212, 227, 249) 0%, rgb(212, 229, 255) 100%);
            box-shadow: rgba(17, 20, 45, 0.08) 0px 0px 200px 0px;
}
  
`;
