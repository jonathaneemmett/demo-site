import { createUseStyles } from 'react-jss';
import { Colors } from './colors';

// Site Styles

export const useStyles = createUseStyles({
    '@global': {
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            fontFamily: "Sora, sans-serif"
        },
        html: {
            height: "100vh",
        },
        body: {
            height: "100vh",
            fontSize: "16px",
        },
        a: {
            textDecoration: "none",
            color: Colors.white,
        },
        li: {
            listStyle: "none"
        }
    },
    // Navbar
    navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: Colors.darkGrey,
        color: Colors.black,
        boxShadow: `0 1px 10px -2px ${Colors.black}`,
        zIndex: 10,
    },
    navLinks: {
        '& a': {
            color: Colors.white,
        },
        '& :hover': {
            color: Colors.darkGrey
        },
        '& input[type=checkbox]':{
            display: "none"
        },
        '@media (max-width: 768px)': {
            '& input[type=checkbox]:checked ~ $menu': {
                display: "block"
            }
        }
    },
    logo: {
        fontSize: "32px",
        '& a': {
            color: Colors.white,
            '&:hover': {
                color: Colors.lightGrey
            }
        }

    },
    // Navbar Menu
    menu: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "left",
        gap: "1em",
        fontSize: "18px",
        '& li:hover': {
            backgroundColor: Colors.lightGrey,
            color: Colors.white,
            transition: "0.3s ease",
            '@media(max-width: 768px)': {
                display: "inline-block",
                transition: "0.3s ease"
            }
        },
        '& li': {
            padding: "5px 14px",

            '@media(max-width: 768px)': {
                textAlign: "left",
                width: "100%",
                paddingLeft: "20px"
            }

        },
        '& li+li': {
            '@media(max-width: 768px)': {
                marginTop: "12px"
            }
        },
        '@media(max-width: 768px)': {
            display: "none",
            position: "absolute",
            backgroundColor: Colors.darkGrey,
            right: 0,
            left: 0,
            textAlign: "center",
            padding: "16px 0"
        }
    },
    hamburger: {
        display: "none",
        fontSize: "24px",
        userSelect: "none",
        color: Colors.white,
        '@media(max-width: 768px)': {
            display: "block",
        }
    },
    // End Navbar Menu
    // End Navbar
    // Body
    container: {
        width: "100%",
        margin: "0 auto",
        '@media (max-width: 768px)': {
            // TODO: Handle mobile
        }
    },
    content: {
        minHeight: "100vh",
        maxWidth: "1336px",
        margin: "0 auto",
        width: "100%",
        padding: "15px",
    },
    heading: {
        width: "100%",
        margin: "0 auto",
        fontSize: "1em",
        padding: "25px",
        marginBottom: "25px",
        borderBottom: `1px solid ${Colors.darkGrey}`,
        color: Colors.darkGrey,
        textAlign: "center",
        '& h5': {
            fontSize: "2em",
            marginBottom: "25px"
        },
        '@media (max-width: 768px)': {
            maxWidth: "80vw",
            marginBottom: "5px",
        }
    },
    slider: {
        width: "100vw",
        height: "650px",
        position: "relative",
        margin: "0 auto",
        marginTop: "-51px",
    },
    slide: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "absolute",
        transition: "all 0.5s",
        '& img': {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
        '& .caption': {
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            maxWidth: "33%",
            position: "absolute",
            bottom: "55%",
            left: "10%",
            zIndex: 1,
            color: Colors.white,
            textShadow: "0 1px 2px rgba(0,0,0,.6)",
            '@media screen and (max-width: 768px)': {
                // TODO: more mobile modifications
                maxWidth: "100%",
                left: 0,
                padding: "25px"
            }
        }
    },
    sliderButtonContainer: {
        width: "100%",
        color: Colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: Colors.black30,
        padding: "25px",
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    sliderBtn: {
        color: Colors.white,
        background: "white",
        border: "none",
        outline: "none",
        borderRadius: "50%",
        width: "11px",
        height: "11px",
        margin: "5px 10px 5px 10px",
        zIndex: 11,
        '&.active': {
            transform: "scale(1.1)",
            background: Colors.darkGrey,
            border: `1px solid ${Colors.white}`
        }
    },
    sliderBtnPrev: {
      top: "45%",
      left: "2%"
    },
    sliderBtnNext: {
        top: "45%",
        right: "2%"
    },
    // Forms
    // login
    horizontalForm: {
        width: "100%",
        maxWidth: "450px",
        margin: "0 auto",
        '@media (max-width: 768px)': {
            maxWidth: "90vw",
            paddingLeft: 0,
            paddingRight: 0
        }
    },
    searchForm: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "100%",
        maxWidth: "990px",
        margin: "0 auto",
    },
    search: {
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "100%",
        margin: "0 auto",
        position: "relative",
        '@media screen and (max-width: 768px)': {

        }
    },
    formContainer: {
        height: "85vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    },
    formGroup: {
        width: "100%",
        padding: "10px 0 10px 0",
        '& p': {
            fontSize: ".9em",
            '& a': {
                color: Colors.darkGrey
            }
        }
    },
    formControl: {
        width: "100%",
        padding: "18px",
        outline: "none",
        border: "none",
        backgroundColor: Colors.inputGrey,
        '&::placeholder': {
            fontSize: "1.2em"
        }
    },
    // End Forms
    // Buttons
    btn: {
        width: "200px",
        padding: "15px",
        border: "none",
        outline: "none",
        fontSize: "20px",
        color: Colors. darkGrey
    },
    btnPrimary: {
        backgroundColor: Colors.darkGrey,
        color: Colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15px",
        fontWeight: 4600
    },
    btnBlock: {
        width: "100%"
    },
    searchBtn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "65px",
        padding: "16px",
        border: "none",
        outline: "none",
        fontSize: "20px",
        background: Colors.darkGrey,
        color: Colors.white
    },
    // End Buttons
    // Pagination
    pagination: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      marginTop: "55px",
      marginBottom: "35px"
    },
    pageItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
        width: "20px",
        height: "20px",
        padding: "10px",
        margin: "5px",
        background: Colors.black50,
        borderRadius: "50%",
        fontSize: "10px",
        cursor: "pointer",
        '&:hover': {
            background: Colors.black
        }
    },
    pageItemLink: {
        textDecoration: "none",
        color: Colors.white
    },
    // End Pagination
    // Product Styling
    productContent: {
        flexGrow: 1,
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "5px",
        padding: "25px",
        width: "100%",
        height: "auto",
        '@media (max-width: 768px)': {
          marginTop: "25px",
          display: "flex",
          flexDirection: "column"
        }
    },
    productItem: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        background: Colors.black75,
        padding: "15px",
        color: Colors.white,
        boxShadow: `0 0 3px ${Colors.black}`,
        '@media screen and (max-width: 768px)': {
          width: "100%",
        }
    },
    productItemHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: Colors.white,
      padding: "5px"
    },
    productName: {
        fontWeight: "bolder",
        fontSize: ".8rem",
        height: "100%",
    },
    productStars: {
        color: Colors.red,
        whiteSpace: "nowrap"
    },
    productImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px"
    },
    productAddToCart: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
    },
    productPrice: {
        fontSize: "1rem",
        fontWeight: "bold"
    },
    // End Product Styling
    // Email SignUp
    emailSignUp: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "25px",
        background: Colors.darkGrey,
        '& input[type=email]': {
            padding: "15px",
            width: "50%",
            marginRight: "15px",
            '@media (max-width: 768px)': {
                width: "100%",
            }
        },
        '& a': {
            padding: "15px",
            background: Colors.lightGrey,
            '@media (max-width: 768px)': {
                whiteSpace: "nowrap"
            }
        }
    },
    // End Email SignUp
    // End Body
    //Footer
    footer: {
        width: "100%",
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.lightGrey,
        padding: "15px",
        marginTop: "auto",
        color: Colors.white,
        fontSize: ".8em",
        position: "relative",
        bottom: 0,
        '& a': {
            marginLeft: "5px",
            marginRight: "5px",
            color: Colors.white
        }
    },
    // End Footer
    // Error
    error: {
        color: Colors.red,
    },
    errorPageContainer: {
        height: "100vh"

    }
    // End Error
});
