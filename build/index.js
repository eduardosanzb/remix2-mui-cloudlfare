var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// server.js
import { logDevReady } from "@remix-run/cloudflare";
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { renderToString } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function meta() {
  return {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1"
  };
}
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/Dashboard.jsx
import * as React6 from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography3 from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link3 from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";

// app/components/ListItems.jsx
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var mainListItems = /* @__PURE__ */ jsxDEV3(React.Fragment, { children: [
  /* @__PURE__ */ jsxDEV3(ListItemButton, { children: [
    /* @__PURE__ */ jsxDEV3(ListItemIcon, { children: /* @__PURE__ */ jsxDEV3(DashboardIcon, {}, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(ListItemText, { primary: "Dashboard" }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ListItems.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV3(ListItemButton, { children: [
    /* @__PURE__ */ jsxDEV3(ListItemIcon, { children: /* @__PURE__ */ jsxDEV3(ShoppingCartIcon, {}, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(ListItemText, { primary: "Orders" }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ListItems.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV3(ListItemButton, { children: [
    /* @__PURE__ */ jsxDEV3(ListItemIcon, { children: /* @__PURE__ */ jsxDEV3(PeopleIcon, {}, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(ListItemText, { primary: "Customers" }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ListItems.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV3(ListItemButton, { children: [
    /* @__PURE__ */ jsxDEV3(ListItemIcon, { children: /* @__PURE__ */ jsxDEV3(BarChartIcon, {}, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(ListItemText, { primary: "Reports" }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ListItems.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV3(ListItemButton, { children: [
    /* @__PURE__ */ jsxDEV3(ListItemIcon, { children: /* @__PURE__ */ jsxDEV3(LayersIcon, {}, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(ListItemText, { primary: "Integrations" }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ListItems.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/ListItems.jsx",
  lineNumber: 14,
  columnNumber: 3
}, this), secondaryListItems = /* @__PURE__ */ jsxDEV3(React.Fragment, { children: [
  /* @__PURE__ */ jsxDEV3(ListSubheader, { component: "div", inset: !0, children: "Saved reports" }, void 0, !1, {
    fileName: "app/components/ListItems.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV3(ListItemButton, { children: [
    /* @__PURE__ */ jsxDEV3(ListItemIcon, { children: /* @__PURE__ */ jsxDEV3(AssignmentIcon, {}, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(ListItemText, { primary: "Current month" }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ListItems.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV3(ListItemButton, { children: [
    /* @__PURE__ */ jsxDEV3(ListItemIcon, { children: /* @__PURE__ */ jsxDEV3(AssignmentIcon, {}, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(ListItemText, { primary: "Last quarter" }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ListItems.jsx",
    lineNumber: 59,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV3(ListItemButton, { children: [
    /* @__PURE__ */ jsxDEV3(ListItemIcon, { children: /* @__PURE__ */ jsxDEV3(AssignmentIcon, {}, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(ListItemText, { primary: "Year-end sale" }, void 0, !1, {
      fileName: "app/components/ListItems.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ListItems.jsx",
    lineNumber: 65,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/ListItems.jsx",
  lineNumber: 49,
  columnNumber: 3
}, this);

// app/components/Chart.jsx
import * as React3 from "react";
import { useTheme } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from "recharts";

// app/components/Title.jsx
import "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Title(props) {
  return /* @__PURE__ */ jsxDEV4(Typography, { component: "h2", variant: "h6", color: "primary", gutterBottom: !0, children: props.children }, void 0, !1, {
    fileName: "app/components/Title.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
Title.propTypes = {
  children: PropTypes.node
};
var Title_default = Title;

// app/components/Chart.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function createData(time, amount) {
  return { time, amount };
}
var data = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2e3),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", void 0)
];
function Chart() {
  let theme = useTheme();
  return /* @__PURE__ */ jsxDEV5(React3.Fragment, { children: [
    /* @__PURE__ */ jsxDEV5(Title_default, { children: "Today" }, void 0, !1, {
      fileName: "app/components/Chart.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5(ResponsiveContainer, { children: /* @__PURE__ */ jsxDEV5(
      LineChart,
      {
        data,
        margin: {
          top: 16,
          right: 16,
          bottom: 0,
          left: 24
        },
        children: [
          /* @__PURE__ */ jsxDEV5(
            XAxis,
            {
              dataKey: "time",
              stroke: theme.palette.text.secondary,
              style: theme.typography.body2
            },
            void 0,
            !1,
            {
              fileName: "app/components/Chart.jsx",
              lineNumber: 39,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV5(
            YAxis,
            {
              stroke: theme.palette.text.secondary,
              style: theme.typography.body2,
              children: /* @__PURE__ */ jsxDEV5(
                Label,
                {
                  angle: 270,
                  position: "left",
                  style: {
                    textAnchor: "middle",
                    fill: theme.palette.text.primary,
                    ...theme.typography.body1
                  },
                  children: "Sales ($)"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Chart.jsx",
                  lineNumber: 48,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Chart.jsx",
              lineNumber: 44,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV5(
            Line,
            {
              isAnimationActive: !1,
              type: "monotone",
              dataKey: "amount",
              stroke: theme.palette.primary.main,
              dot: !1
            },
            void 0,
            !1,
            {
              fileName: "app/components/Chart.jsx",
              lineNumber: 60,
              columnNumber: 11
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Chart.jsx",
        lineNumber: 30,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Chart.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Chart.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/Deposits.jsx
import * as React4 from "react";
import Link from "@mui/material/Link";
import Typography2 from "@mui/material/Typography";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function preventDefault(event) {
  event.preventDefault();
}
function Deposits() {
  return /* @__PURE__ */ jsxDEV6(React4.Fragment, { children: [
    /* @__PURE__ */ jsxDEV6(Title_default, { children: "Recent Deposits" }, void 0, !1, {
      fileName: "app/components/Deposits.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(Typography2, { component: "p", variant: "h4", children: "$3,024.00" }, void 0, !1, {
      fileName: "app/components/Deposits.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(Typography2, { color: "text.secondary", sx: { flex: 1 }, children: "on 15 March, 2019" }, void 0, !1, {
      fileName: "app/components/Deposits.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6(Link, { color: "primary", href: "#", onClick: preventDefault, children: "View balance" }, void 0, !1, {
      fileName: "app/components/Deposits.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Deposits.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Deposits.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/Orders.jsx
import * as React5 from "react";
import Link2 from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function createData2(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}
var rows = [
  createData2(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA \u2800\u2022\u2022\u2022\u2022 3719",
    312.44
  ),
  createData2(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA \u2800\u2022\u2022\u2022\u2022 2574",
    866.99
  ),
  createData2(2, "16 Mar, 2019", "Tom Scholz", "Boston, MA", "MC \u2800\u2022\u2022\u2022\u2022 1253", 100.81),
  createData2(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX \u2800\u2022\u2022\u2022\u2022 2000",
    654.39
  ),
  createData2(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA \u2800\u2022\u2022\u2022\u2022 5919",
    212.79
  )
];
function preventDefault2(event) {
  event.preventDefault();
}
function Orders() {
  return /* @__PURE__ */ jsxDEV7(React5.Fragment, { children: [
    /* @__PURE__ */ jsxDEV7(Title_default, { children: "Recent Orders" }, void 0, !1, {
      fileName: "app/components/Orders.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7(Table, { size: "small", children: [
      /* @__PURE__ */ jsxDEV7(TableHead, { children: /* @__PURE__ */ jsxDEV7(TableRow, { children: [
        /* @__PURE__ */ jsxDEV7(TableCell, { children: "Date" }, void 0, !1, {
          fileName: "app/components/Orders.jsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(TableCell, { children: "Name" }, void 0, !1, {
          fileName: "app/components/Orders.jsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(TableCell, { children: "Ship To" }, void 0, !1, {
          fileName: "app/components/Orders.jsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(TableCell, { children: "Payment Method" }, void 0, !1, {
          fileName: "app/components/Orders.jsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(TableCell, { align: "right", children: "Sale Amount" }, void 0, !1, {
          fileName: "app/components/Orders.jsx",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Orders.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Orders.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(TableBody, { children: rows.map((row) => /* @__PURE__ */ jsxDEV7(TableRow, { children: [
        /* @__PURE__ */ jsxDEV7(TableCell, { children: row.date }, void 0, !1, {
          fileName: "app/components/Orders.jsx",
          lineNumber: 72,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV7(TableCell, { children: row.name }, void 0, !1, {
          fileName: "app/components/Orders.jsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV7(TableCell, { children: row.shipTo }, void 0, !1, {
          fileName: "app/components/Orders.jsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV7(TableCell, { children: row.paymentMethod }, void 0, !1, {
          fileName: "app/components/Orders.jsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV7(TableCell, { align: "right", children: `$${row.amount}` }, void 0, !1, {
          fileName: "app/components/Orders.jsx",
          lineNumber: 76,
          columnNumber: 15
        }, this)
      ] }, row.id, !0, {
        fileName: "app/components/Orders.jsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/Orders.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Orders.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7(Link2, { color: "primary", href: "#", onClick: preventDefault2, sx: { mt: 3 }, children: "See more orders" }, void 0, !1, {
      fileName: "app/components/Orders.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Orders.jsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/components/Dashboard.jsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Copyright(props) {
  return /* @__PURE__ */ jsxDEV8(Typography3, { variant: "body2", color: "text.secondary", align: "center", ...props, children: [
    "Copyright \xA9 ",
    /* @__PURE__ */ jsxDEV8(Link3, { color: "inherit", href: "https://mui.com/", children: "Your Website" }, void 0, !1, {
      fileName: "app/components/Dashboard.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    " ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    "."
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
var drawerWidth = 240, AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
})), Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: "border-box",
      ...!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9)
        }
      }
    }
  })
), mdTheme = createTheme();
function DashboardContent() {
  let [open, setOpen] = React6.useState(!0), toggleDrawer = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxDEV8(ThemeProvider, { theme: mdTheme, children: /* @__PURE__ */ jsxDEV8(Box, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ jsxDEV8(CssBaseline, {}, void 0, !1, {
      fileName: "app/components/Dashboard.jsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8(AppBar, { position: "absolute", open, children: /* @__PURE__ */ jsxDEV8(
      Toolbar,
      {
        sx: {
          pr: "24px"
          // keep right padding when drawer closed
        },
        children: [
          /* @__PURE__ */ jsxDEV8(
            IconButton,
            {
              edge: "start",
              color: "inherit",
              "aria-label": "open drawer",
              onClick: toggleDrawer,
              sx: {
                marginRight: "36px",
                ...open && { display: "none" }
              },
              children: /* @__PURE__ */ jsxDEV8(MenuIcon, {}, void 0, !1, {
                fileName: "app/components/Dashboard.jsx",
                lineNumber: 112,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Dashboard.jsx",
              lineNumber: 102,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            Typography3,
            {
              component: "h1",
              variant: "h6",
              color: "inherit",
              noWrap: !0,
              sx: { flexGrow: 1 },
              children: "Dashboard"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Dashboard.jsx",
              lineNumber: 114,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(IconButton, { color: "inherit", children: /* @__PURE__ */ jsxDEV8(Badge, { badgeContent: 4, color: "secondary", children: /* @__PURE__ */ jsxDEV8(NotificationsIcon, {}, void 0, !1, {
            fileName: "app/components/Dashboard.jsx",
            lineNumber: 125,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Dashboard.jsx",
            lineNumber: 124,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/Dashboard.jsx",
            lineNumber: 123,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Dashboard.jsx",
        lineNumber: 97,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Dashboard.jsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8(Drawer, { variant: "permanent", open, children: [
      /* @__PURE__ */ jsxDEV8(
        Toolbar,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1]
          },
          children: /* @__PURE__ */ jsxDEV8(IconButton, { onClick: toggleDrawer, children: /* @__PURE__ */ jsxDEV8(ChevronLeftIcon, {}, void 0, !1, {
            fileName: "app/components/Dashboard.jsx",
            lineNumber: 140,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/Dashboard.jsx",
            lineNumber: 139,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Dashboard.jsx",
          lineNumber: 131,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(Divider, {}, void 0, !1, {
        fileName: "app/components/Dashboard.jsx",
        lineNumber: 143,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8(List, { component: "nav", children: [
        mainListItems,
        /* @__PURE__ */ jsxDEV8(Divider, { sx: { my: 1 } }, void 0, !1, {
          fileName: "app/components/Dashboard.jsx",
          lineNumber: 146,
          columnNumber: 13
        }, this),
        secondaryListItems
      ] }, void 0, !0, {
        fileName: "app/components/Dashboard.jsx",
        lineNumber: 144,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Dashboard.jsx",
      lineNumber: 130,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8(
      Box,
      {
        component: "main",
        sx: {
          backgroundColor: (theme) => theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        },
        children: [
          /* @__PURE__ */ jsxDEV8(Toolbar, {}, void 0, !1, {
            fileName: "app/components/Dashboard.jsx",
            lineNumber: 162,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV8(Container, { maxWidth: "lg", sx: { mt: 4, mb: 4 }, children: [
            /* @__PURE__ */ jsxDEV8(Grid, { container: !0, spacing: 3, children: [
              /* @__PURE__ */ jsxDEV8(Grid, { item: !0, xs: 12, md: 8, lg: 9, children: /* @__PURE__ */ jsxDEV8(
                Paper,
                {
                  sx: {
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240
                  },
                  children: /* @__PURE__ */ jsxDEV8(Chart, {}, void 0, !1, {
                    fileName: "app/components/Dashboard.jsx",
                    lineNumber: 175,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Dashboard.jsx",
                  lineNumber: 167,
                  columnNumber: 17
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/Dashboard.jsx",
                lineNumber: 166,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8(Grid, { item: !0, xs: 12, md: 4, lg: 3, children: /* @__PURE__ */ jsxDEV8(
                Paper,
                {
                  sx: {
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240
                  },
                  children: /* @__PURE__ */ jsxDEV8(Deposits, {}, void 0, !1, {
                    fileName: "app/components/Dashboard.jsx",
                    lineNumber: 188,
                    columnNumber: 19
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Dashboard.jsx",
                  lineNumber: 180,
                  columnNumber: 17
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/Dashboard.jsx",
                lineNumber: 179,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV8(Grid, { item: !0, xs: 12, children: /* @__PURE__ */ jsxDEV8(Paper, { sx: { p: 2, display: "flex", flexDirection: "column" }, children: /* @__PURE__ */ jsxDEV8(Orders, {}, void 0, !1, {
                fileName: "app/components/Dashboard.jsx",
                lineNumber: 194,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/components/Dashboard.jsx",
                lineNumber: 193,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/components/Dashboard.jsx",
                lineNumber: 192,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Dashboard.jsx",
              lineNumber: 164,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV8(Copyright, { sx: { pt: 4 } }, void 0, !1, {
              fileName: "app/components/Dashboard.jsx",
              lineNumber: 198,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Dashboard.jsx",
            lineNumber: 163,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Dashboard.jsx",
        lineNumber: 150,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Dashboard.jsx",
    lineNumber: 94,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Dashboard.jsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}
function Dashboard() {
  return /* @__PURE__ */ jsxDEV8(DashboardContent, {}, void 0, !1, {
    fileName: "app/components/Dashboard.jsx",
    lineNumber: 207,
    columnNumber: 10
  }, this);
}

// app/routes/index.jsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV9(Dashboard, {}, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PLDGCTNE.js", imports: ["/build/_shared/chunk-2LSE7FLB.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-ARVQJZB7.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-B6E2XEIF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-WVONBQJM.js", imports: ["/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "ed3def08", hmr: { runtime: "/build/_shared/chunk-ARVQJZB7.js", timestamp: 1705690515665 }, url: "/build/manifest-ED3DEF08.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
logDevReady(server_build_exports);
var onRequest = createPagesFunctionHandler({
  build: server_build_exports,
  getLoadContext: (context) => ({ env: context.env }),
  mode
});
export {
  onRequest
};
//# sourceMappingURL=index.js.map
