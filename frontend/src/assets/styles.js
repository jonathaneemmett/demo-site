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
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            fontSize: "16px",
            overflowX: "hidden",
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
        height: "100%",
        width: "100%",
        maxWidth: "1336px",
        margin: "0 auto",
        padding: "15px",
        '@media (max-width: 768px)': {
            // TODO: Handle mobile
        }
    },
    content: {
      minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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
      zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "100%",
        margin: "0 auto",
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
        listStyle: "none",
        padding: "15px 25px 15px 25px",
        margin: "5px",
        background: Colors.black50,
        borderRadius: "5px",
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
        fontSize: "1rem",
        height: "100%"
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
