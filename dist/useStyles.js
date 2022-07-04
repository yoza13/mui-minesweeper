"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = (0, styles_1.makeStyles)(function (theme) {
    var _a, _b, _c;
    return (0, styles_1.createStyles)({
        drawerListItem: {
            color: "inherit",
        },
        appContainer: {
            width: "100%",
            maxWidth: "inherit",
            marginBottom: "10rem",
        },
        homePageAvatar: {
            width: 120,
            height: 120,
            border: "5px solid #8f40e9",
            borderColor: function (props) {
                return props.isDarkTheme
                    ? theme.palette.common.black
                    : theme.palette.primary.dark;
            },
        },
        calculatorBox: {
            width: "fit-content",
            margin: "auto",
        },
        displayField: {
            color: "#fff",
            backgroundColor: function (props) {
                return props.isDarkTheme ? theme.palette.grey.A700 : theme.palette.grey[400];
            },
            fontWeight: "bold",
            height: "3em",
            textAlign: "right",
            fontSize: "24px",
        },
        buttonPanel: {
            marginBottom: "2rem",
        },
        buttonStack: {
            borderTop: "1px solid",
            "&:last-child": {
                borderBottom: "1px solid",
            },
        },
        buttons: {
            fontSize: "24px",
            color: function (props) { return (props.isDarkTheme ? "#fff" : "#000"); },
            borderRight: "1px solid",
            borderRadius: 0,
            width: "25%",
            backgroundColor: function (props) {
                return props.isDarkTheme ? theme.palette.grey.A700 : theme.palette.grey[200];
            },
            "&:last-child": {
                borderRight: "none",
                backgroundColor: function (props) {
                    return props.isDarkTheme
                        ? theme.palette.warning.dark
                        : theme.palette.warning.light;
                },
            },
            "&.wide": {
                width: "50%",
            },
        },
        contentBox: {
            margin: "3rem 0 3rem 0",
            paddingTop: "2rem",
        },
        listStyleDisc: {
            listStyle: "disc",
        },
        listAsItem: {
            display: "list-item",
        },
        experienceCard: {
            maxWidth: 345,
            marginRight: "2rem",
            marginBottom: "3rem",
            marginLeft: "2rem",
        },
        boldWeight: {
            fontWeight: "bold",
        },
        dividerStyle: {
            borderColor: "inherit",
            margin: "auto",
            marginBottom: "1rem",
        },
        experienceAccordionStack: (_a = {
                marginBottom: "1rem"
            },
            _a[theme.breakpoints.up("md")] = {
                display: "none !important",
            },
            _a["& .accordion"] = { padding: "0 1rem" },
            _a),
        experienceCardsStack: (_b = {
                flexWrap: "wrap",
                margin: "0 auto",
                marginBottom: "1rem"
            },
            _b[theme.breakpoints.down("md")] = {
                display: "none !important",
            },
            _b),
        gameAlert: (_c = {},
            _c[theme.breakpoints.up("md")] = {
                display: "none !important",
            },
            _c),
        downloadBlock: {
            justifyContent: "center",
            alignItems: "center",
        },
        downloadLinks: {
            border: function (props) {
                return props.isDarkTheme
                    ? "10px solid ".concat(theme.palette.secondary.dark)
                    : "10px solid ".concat(theme.palette.primary.dark);
            },
            padding: " 1rem 2rem",
            marginBottom: "2rem",
            textDecoration: "none",
            color: "#fff",
            fontWeight: "bold",
            backgroundImage: function (props) {
                return props.isDarkTheme
                    ? "linear-gradient(".concat(theme.palette.secondary.main, ", ").concat(theme.palette.secondary.light, ")")
                    : "linear-gradient(".concat(theme.palette.primary.main, ", ").concat(theme.palette.primary.light, ")");
            },
        },
        footer: {
            borderTop: "1px solid",
            backgroundColor: function (props) {
                return props.isDarkTheme
                    ? theme.palette.grey[900]
                    : theme.palette.primary.main;
            },
            color: "#fff",
            textAlign: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100vw",
            maxWidth: "inherit",
            zIndex: 100,
        },
    });
});
//# sourceMappingURL=useStyles.js.map