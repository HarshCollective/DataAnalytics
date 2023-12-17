"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./app/libs/client.ts":
/*!****************************!*\
  !*** ./app/libs/client.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.DATABASE_URL) {\n    throw new Error('Invalid/Missing environment variable: \"DATABASE_URL\"');\n}\nconst uri = process.env.DATABASE_URL;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvbGlicy9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0dBQWtHO0FBQzdEO0FBTXJDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxZQUFZLEVBQUU7SUFDN0IsTUFBTSxJQUFJQyxNQUFNLHdEQUF1RDtBQUN6RSxDQUFDO0FBRUQsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxZQUFZO0FBQ3BDLE1BQU1HLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVAsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JILFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNLLEtBQUtDO1FBQzlCRyxPQUFPQyxtQkFBbUIsR0FBR0gsT0FBT0ksT0FBTztJQUM3QyxDQUFDO0lBQ0RILGdCQUFnQkMsT0FBT0MsbUJBQW1CO0FBQzVDLE9BQU8sRUFJTjtBQUVELGlFQUFpRTtBQUNqRSw4REFBOEQ7QUFDOUQsaUVBQWVGLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2FkZS11c2VyLWFwcC8uL2FwcC9saWJzL2NsaWVudC50cz9jMGQ3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcblxuZGVjbGFyZSBnbG9iYWx7XG4gICAgdmFyIF9tb25nb0NsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+XG59XG5cbmlmICghcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIkRBVEFCQVNFX1VSTFwiJylcbn1cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMXG5jb25zdCBvcHRpb25zID0ge31cblxubGV0IGNsaWVudFxubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIC8vIEluIGRldmVsb3BtZW50IG1vZGUsIHVzZSBhIGdsb2JhbCB2YXJpYWJsZSBzbyB0aGF0IHRoZSB2YWx1ZVxuICAvLyBpcyBwcmVzZXJ2ZWQgYWNyb3NzIG1vZHVsZSByZWxvYWRzIGNhdXNlZCBieSBITVIgKEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQpLlxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2Vcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXG59XG5cbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJFcnJvciIsInVyaSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./app/libs/client.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(api)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _app_libs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/libs/client */ \"(api)/./app/libs/client.ts\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_app_libs_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    pages: {\n        signIn: \"/\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async session ({ session , user , token  }) {\n            return session;\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ007QUFFRDtBQUdoQjtBQUUvQixNQUFNSSxjQUEyQjtJQUN0Q0MsU0FBU0gscUVBQWNBLENBQUNDLHdEQUFNQTtJQUM5QkcsV0FBVztRQUNUTCxpRUFBY0EsQ0FBQztZQUNiTSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFFaEQ7S0FDRDtJQUNEQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxXQUFXO1FBQ1QsTUFBTUYsU0FBUSxFQUFFQSxRQUFPLEVBQUVHLEtBQUksRUFBRUMsTUFBSyxFQUFFLEVBQUU7WUFDcEMsT0FBT0o7UUFDWDtJQUNKO0lBQ0VLLFFBQVFaLFFBQVFDLEdBQUcsQ0FBQ1ksZUFBZTtBQUNyQyxFQUFDO0FBRUQsaUVBQWVyQixnREFBUUEsQ0FBQ0ksWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzYWRlLXVzZXItYXBwLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCJcblxuXG5pbXBvcnQgY2xpZW50IGZyb20gXCJAL2FwcC9saWJzL2NsaWVudFwiXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogQXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudCksXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIGFzIHN0cmluZyxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgYXMgc3RyaW5nLFxuICAgICAgXG4gICAgfSlcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvJyxcbiAgfSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdXNlciwgdG9rZW4gfSkge1xuICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9XG59LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpOyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjbGllbnQiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJwYWdlcyIsInNpZ25JbiIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsInVzZXIiLCJ0b2tlbiIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./node_modules/@auth/mongodb-adapter/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@auth/mongodb-adapter/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MongoDBAdapter\": () => (/* binding */ MongoDBAdapter),\n/* harmony export */   \"_id\": () => (/* binding */ _id),\n/* harmony export */   \"defaultCollections\": () => (/* binding */ defaultCollections),\n/* harmony export */   \"format\": () => (/* binding */ format)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/**\n * <div style={{display: \"flex\", justifyContent: \"space-between\", alignItems: \"center\", padding: 16}}>\n *  <p style={{fontWeight: \"normal\"}}>Official <a href=\"https://www.mongodb.com\">MongoDB</a> adapter for Auth.js / NextAuth.js.</p>\n *  <a href=\"https://www.mongodb.com\">\n *   <img style={{display: \"block\"}} src=\"https://authjs.dev/img/adapters/mongodb.svg\" width=\"30\" />\n *  </a>\n * </div>\n *\n * ## Installation\n *\n * ```bash npm2yarn\n * npm install @auth/mongodb-adapter mongodb\n * ```\n *\n * @module @auth/mongodb-adapter\n */\n\nconst defaultCollections = {\n    Users: \"users\",\n    Accounts: \"accounts\",\n    Sessions: \"sessions\",\n    VerificationTokens: \"verification_tokens\",\n};\nconst format = {\n    /** Takes a mongoDB object and returns a plain old JavaScript object */\n    from(object) {\n        const newObject = {};\n        for (const key in object) {\n            const value = object[key];\n            if (key === \"_id\") {\n                newObject.id = value.toHexString();\n            }\n            else if (key === \"userId\") {\n                newObject[key] = value.toHexString();\n            }\n            else {\n                newObject[key] = value;\n            }\n        }\n        return newObject;\n    },\n    /** Takes a plain old JavaScript object and turns it into a mongoDB object */\n    to(object) {\n        const newObject = {\n            _id: _id(object.id),\n        };\n        for (const key in object) {\n            const value = object[key];\n            if (key === \"userId\")\n                newObject[key] = _id(value);\n            else if (key === \"id\")\n                continue;\n            else\n                newObject[key] = value;\n        }\n        return newObject;\n    },\n};\n/** @internal */\nfunction _id(hex) {\n    if (hex?.length !== 24)\n        return new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId();\n    return new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(hex);\n}\n/**\n * ## Setup\n *\n * The MongoDB adapter does not handle connections automatically, so you will have to make sure that you pass the Adapter a `MongoClient` that is connected already. Below you can see an example how to do this.\n *\n * ### Add the MongoDB client\n *\n * ```ts\n * // This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n * import { MongoClient } from \"mongodb\"\n *\n * if (!process.env.MONGODB_URI) {\n *   throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"')\n * }\n *\n * const uri = process.env.MONGODB_URI\n * const options = {}\n *\n * let client\n * let clientPromise: Promise<MongoClient>\n *\n * if (process.env.NODE_ENV === \"development\") {\n *   // In development mode, use a global variable so that the value\n *   // is preserved across module reloads caused by HMR (Hot Module Replacement).\n *   if (!global._mongoClientPromise) {\n *     client = new MongoClient(uri, options)\n *     global._mongoClientPromise = client.connect()\n *   }\n *   clientPromise = global._mongoClientPromise\n * } else {\n *   // In production mode, it's best to not use a global variable.\n *   client = new MongoClient(uri, options)\n *   clientPromise = client.connect()\n * }\n *\n * // Export a module-scoped MongoClient promise. By doing this in a\n * // separate module, the client can be shared across functions.\n * export default clientPromise\n * ```\n *\n * ### Configure Auth.js\n *\n * ```js\n * import NextAuth from \"next-auth\"\n * import { MongoDBAdapter } from \"@auth/mongodb-adapter\"\n * import clientPromise from \"../../../lib/mongodb\"\n *\n * // For more information on each option (and a full list of options) go to\n * // https://authjs.dev/reference/providers/oauth\n * export default NextAuth({\n *   adapter: MongoDBAdapter(clientPromise),\n *   ...\n * })\n * ```\n **/\nfunction MongoDBAdapter(client, options = {}) {\n    const { collections } = options;\n    const { from, to } = format;\n    const db = (async () => {\n        const _db = (await client).db(options.databaseName);\n        const c = { ...defaultCollections, ...collections };\n        return {\n            U: _db.collection(c.Users),\n            A: _db.collection(c.Accounts),\n            S: _db.collection(c.Sessions),\n            V: _db.collection(c?.VerificationTokens),\n        };\n    })();\n    return {\n        async createUser(data) {\n            const user = to(data);\n            await (await db).U.insertOne(user);\n            return from(user);\n        },\n        async getUser(id) {\n            const user = await (await db).U.findOne({ _id: _id(id) });\n            if (!user)\n                return null;\n            return from(user);\n        },\n        async getUserByEmail(email) {\n            const user = await (await db).U.findOne({ email });\n            if (!user)\n                return null;\n            return from(user);\n        },\n        async getUserByAccount(provider_providerAccountId) {\n            const account = await (await db).A.findOne(provider_providerAccountId);\n            if (!account)\n                return null;\n            const user = await (await db).U.findOne({ _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(account.userId) });\n            if (!user)\n                return null;\n            return from(user);\n        },\n        async updateUser(data) {\n            const { _id, ...user } = to(data);\n            const result = await (await db).U.findOneAndUpdate({ _id }, { $set: user }, { returnDocument: \"after\" });\n            return from(result);\n        },\n        async deleteUser(id) {\n            const userId = _id(id);\n            const m = await db;\n            await Promise.all([\n                m.A.deleteMany({ userId: userId }),\n                m.S.deleteMany({ userId: userId }),\n                m.U.deleteOne({ _id: userId }),\n            ]);\n        },\n        linkAccount: async (data) => {\n            const account = to(data);\n            await (await db).A.insertOne(account);\n            return account;\n        },\n        async unlinkAccount(provider_providerAccountId) {\n            const account = await (await db).A.findOneAndDelete(provider_providerAccountId);\n            return from(account);\n        },\n        async getSessionAndUser(sessionToken) {\n            const session = await (await db).S.findOne({ sessionToken });\n            if (!session)\n                return null;\n            const user = await (await db).U.findOne({ _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(session.userId) });\n            if (!user)\n                return null;\n            return {\n                user: from(user),\n                session: from(session),\n            };\n        },\n        async createSession(data) {\n            const session = to(data);\n            await (await db).S.insertOne(session);\n            return from(session);\n        },\n        async updateSession(data) {\n            const { _id, ...session } = to(data);\n            const updatedSession = await (await db).S.findOneAndUpdate({ sessionToken: session.sessionToken }, { $set: session }, { returnDocument: \"after\" });\n            return from(updatedSession);\n        },\n        async deleteSession(sessionToken) {\n            const session = await (await db).S.findOneAndDelete({\n                sessionToken,\n            });\n            return from(session);\n        },\n        async createVerificationToken(data) {\n            await (await db).V.insertOne(to(data));\n            return data;\n        },\n        async useVerificationToken(identifier_token) {\n            const verificationToken = await (await db).V.findOneAndDelete(identifier_token);\n            if (!verificationToken)\n                return null;\n            const { _id, ...rest } = verificationToken;\n            return rest;\n        },\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQGF1dGgvbW9uZ29kYi1hZGFwdGVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxnQkFBZ0IscUZBQXFGO0FBQ3JHLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21DO0FBQzVCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0EsbUJBQW1CLDZDQUFRO0FBQzNCLGVBQWUsNkNBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDTyw0Q0FBNEM7QUFDbkQsWUFBWSxjQUFjO0FBQzFCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0RBQXNELGNBQWM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0RBQXNELE9BQU87QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFNBQVMsNkNBQVEsa0JBQWtCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixlQUFlO0FBQ25DLGlFQUFpRSxLQUFLLElBQUksWUFBWSxJQUFJLHlCQUF5QjtBQUNuSDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQsaUNBQWlDLGdCQUFnQjtBQUNqRCxnQ0FBZ0MsYUFBYTtBQUM3QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0Esc0RBQXNELFNBQVMsNkNBQVEsa0JBQWtCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEMseUVBQXlFLG9DQUFvQyxJQUFJLGVBQWUsSUFBSSx5QkFBeUI7QUFDN0o7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0EsU0FBUztBQUNUO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2FkZS11c2VyLWFwcC8uL25vZGVfbW9kdWxlcy9AYXV0aC9tb25nb2RiLWFkYXB0ZXIvaW5kZXguanM/OGMwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBwYWRkaW5nOiAxNn19PlxuICogIDxwIHN0eWxlPXt7Zm9udFdlaWdodDogXCJub3JtYWxcIn19Pk9mZmljaWFsIDxhIGhyZWY9XCJodHRwczovL3d3dy5tb25nb2RiLmNvbVwiPk1vbmdvREI8L2E+IGFkYXB0ZXIgZm9yIEF1dGguanMgLyBOZXh0QXV0aC5qcy48L3A+XG4gKiAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1vbmdvZGIuY29tXCI+XG4gKiAgIDxpbWcgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCJ9fSBzcmM9XCJodHRwczovL2F1dGhqcy5kZXYvaW1nL2FkYXB0ZXJzL21vbmdvZGIuc3ZnXCIgd2lkdGg9XCIzMFwiIC8+XG4gKiAgPC9hPlxuICogPC9kaXY+XG4gKlxuICogIyMgSW5zdGFsbGF0aW9uXG4gKlxuICogYGBgYmFzaCBucG0yeWFyblxuICogbnBtIGluc3RhbGwgQGF1dGgvbW9uZ29kYi1hZGFwdGVyIG1vbmdvZGJcbiAqIGBgYFxuICpcbiAqIEBtb2R1bGUgQGF1dGgvbW9uZ29kYi1hZGFwdGVyXG4gKi9cbmltcG9ydCB7IE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29sbGVjdGlvbnMgPSB7XG4gICAgVXNlcnM6IFwidXNlcnNcIixcbiAgICBBY2NvdW50czogXCJhY2NvdW50c1wiLFxuICAgIFNlc3Npb25zOiBcInNlc3Npb25zXCIsXG4gICAgVmVyaWZpY2F0aW9uVG9rZW5zOiBcInZlcmlmaWNhdGlvbl90b2tlbnNcIixcbn07XG5leHBvcnQgY29uc3QgZm9ybWF0ID0ge1xuICAgIC8qKiBUYWtlcyBhIG1vbmdvREIgb2JqZWN0IGFuZCByZXR1cm5zIGEgcGxhaW4gb2xkIEphdmFTY3JpcHQgb2JqZWN0ICovXG4gICAgZnJvbShvYmplY3QpIHtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0ID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiX2lkXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmplY3QuaWQgPSB2YWx1ZS50b0hleFN0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcInVzZXJJZFwiKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSB2YWx1ZS50b0hleFN0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH0sXG4gICAgLyoqIFRha2VzIGEgcGxhaW4gb2xkIEphdmFTY3JpcHQgb2JqZWN0IGFuZCB0dXJucyBpdCBpbnRvIGEgbW9uZ29EQiBvYmplY3QgKi9cbiAgICB0byhvYmplY3QpIHtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0ID0ge1xuICAgICAgICAgICAgX2lkOiBfaWQob2JqZWN0LmlkKSxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJ1c2VySWRcIilcbiAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IF9pZCh2YWx1ZSk7XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IFwiaWRcIilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbn07XG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gX2lkKGhleCkge1xuICAgIGlmIChoZXg/Lmxlbmd0aCAhPT0gMjQpXG4gICAgICAgIHJldHVybiBuZXcgT2JqZWN0SWQoKTtcbiAgICByZXR1cm4gbmV3IE9iamVjdElkKGhleCk7XG59XG4vKipcbiAqICMjIFNldHVwXG4gKlxuICogVGhlIE1vbmdvREIgYWRhcHRlciBkb2VzIG5vdCBoYW5kbGUgY29ubmVjdGlvbnMgYXV0b21hdGljYWxseSwgc28geW91IHdpbGwgaGF2ZSB0byBtYWtlIHN1cmUgdGhhdCB5b3UgcGFzcyB0aGUgQWRhcHRlciBhIGBNb25nb0NsaWVudGAgdGhhdCBpcyBjb25uZWN0ZWQgYWxyZWFkeS4gQmVsb3cgeW91IGNhbiBzZWUgYW4gZXhhbXBsZSBob3cgdG8gZG8gdGhpcy5cbiAqXG4gKiAjIyMgQWRkIHRoZSBNb25nb0RCIGNsaWVudFxuICpcbiAqIGBgYHRzXG4gKiAvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxuICogaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXG4gKlxuICogaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICogICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJylcbiAqIH1cbiAqXG4gKiBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxuICogY29uc3Qgb3B0aW9ucyA9IHt9XG4gKlxuICogbGV0IGNsaWVudFxuICogbGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+XG4gKlxuICogaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAqICAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gKiAgIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gKiAgIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAqICAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICogICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICogICB9XG4gKiAgIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZVxuICogfSBlbHNlIHtcbiAqICAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAqICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAqICAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbiAqIH1cbiAqXG4gKiAvLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuICogLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbiAqIGV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2VcbiAqIGBgYFxuICpcbiAqICMjIyBDb25maWd1cmUgQXV0aC5qc1xuICpcbiAqIGBgYGpzXG4gKiBpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG4gKiBpbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIlxuICogaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCJcbiAqXG4gKiAvLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBlYWNoIG9wdGlvbiAoYW5kIGEgZnVsbCBsaXN0IG9mIG9wdGlvbnMpIGdvIHRvXG4gKiAvLyBodHRwczovL2F1dGhqcy5kZXYvcmVmZXJlbmNlL3Byb3ZpZGVycy9vYXV0aFxuICogZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICogICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcbiAqICAgLi4uXG4gKiB9KVxuICogYGBgXG4gKiovXG5leHBvcnQgZnVuY3Rpb24gTW9uZ29EQkFkYXB0ZXIoY2xpZW50LCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IGNvbGxlY3Rpb25zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IGZvcm1hdDtcbiAgICBjb25zdCBkYiA9IChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IF9kYiA9IChhd2FpdCBjbGllbnQpLmRiKG9wdGlvbnMuZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgY29uc3QgYyA9IHsgLi4uZGVmYXVsdENvbGxlY3Rpb25zLCAuLi5jb2xsZWN0aW9ucyB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgVTogX2RiLmNvbGxlY3Rpb24oYy5Vc2VycyksXG4gICAgICAgICAgICBBOiBfZGIuY29sbGVjdGlvbihjLkFjY291bnRzKSxcbiAgICAgICAgICAgIFM6IF9kYi5jb2xsZWN0aW9uKGMuU2Vzc2lvbnMpLFxuICAgICAgICAgICAgVjogX2RiLmNvbGxlY3Rpb24oYz8uVmVyaWZpY2F0aW9uVG9rZW5zKSxcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFzeW5jIGNyZWF0ZVVzZXIoZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IHRvKGRhdGEpO1xuICAgICAgICAgICAgYXdhaXQgKGF3YWl0IGRiKS5VLmluc2VydE9uZSh1c2VyKTtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHVzZXIpO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBnZXRVc2VyKGlkKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgKGF3YWl0IGRiKS5VLmZpbmRPbmUoeyBfaWQ6IF9pZChpZCkgfSk7XG4gICAgICAgICAgICBpZiAoIXVzZXIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZnJvbSh1c2VyKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZ2V0VXNlckJ5RW1haWwoZW1haWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCAoYXdhaXQgZGIpLlUuZmluZE9uZSh7IGVtYWlsIH0pO1xuICAgICAgICAgICAgaWYgKCF1c2VyKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZyb20odXNlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdldFVzZXJCeUFjY291bnQocHJvdmlkZXJfcHJvdmlkZXJBY2NvdW50SWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCAoYXdhaXQgZGIpLkEuZmluZE9uZShwcm92aWRlcl9wcm92aWRlckFjY291bnRJZCk7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgKGF3YWl0IGRiKS5VLmZpbmRPbmUoeyBfaWQ6IG5ldyBPYmplY3RJZChhY2NvdW50LnVzZXJJZCkgfSk7XG4gICAgICAgICAgICBpZiAoIXVzZXIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZnJvbSh1c2VyKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdXBkYXRlVXNlcihkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB7IF9pZCwgLi4udXNlciB9ID0gdG8oZGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAoYXdhaXQgZGIpLlUuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZCB9LCB7ICRzZXQ6IHVzZXIgfSwgeyByZXR1cm5Eb2N1bWVudDogXCJhZnRlclwiIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZyb20ocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgZGVsZXRlVXNlcihpZCkge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0gX2lkKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSBhd2FpdCBkYjtcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBtLkEuZGVsZXRlTWFueSh7IHVzZXJJZDogdXNlcklkIH0pLFxuICAgICAgICAgICAgICAgIG0uUy5kZWxldGVNYW55KHsgdXNlcklkOiB1c2VySWQgfSksXG4gICAgICAgICAgICAgICAgbS5VLmRlbGV0ZU9uZSh7IF9pZDogdXNlcklkIH0pLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxpbmtBY2NvdW50OiBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IHRvKGRhdGEpO1xuICAgICAgICAgICAgYXdhaXQgKGF3YWl0IGRiKS5BLmluc2VydE9uZShhY2NvdW50KTtcbiAgICAgICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyB1bmxpbmtBY2NvdW50KHByb3ZpZGVyX3Byb3ZpZGVyQWNjb3VudElkKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgKGF3YWl0IGRiKS5BLmZpbmRPbmVBbmREZWxldGUocHJvdmlkZXJfcHJvdmlkZXJBY2NvdW50SWQpO1xuICAgICAgICAgICAgcmV0dXJuIGZyb20oYWNjb3VudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGdldFNlc3Npb25BbmRVc2VyKHNlc3Npb25Ub2tlbikge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IChhd2FpdCBkYikuUy5maW5kT25lKHsgc2Vzc2lvblRva2VuIH0pO1xuICAgICAgICAgICAgaWYgKCFzZXNzaW9uKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IChhd2FpdCBkYikuVS5maW5kT25lKHsgX2lkOiBuZXcgT2JqZWN0SWQoc2Vzc2lvbi51c2VySWQpIH0pO1xuICAgICAgICAgICAgaWYgKCF1c2VyKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1c2VyOiBmcm9tKHVzZXIpLFxuICAgICAgICAgICAgICAgIHNlc3Npb246IGZyb20oc2Vzc2lvbiksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBjcmVhdGVTZXNzaW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlc3Npb24gPSB0byhkYXRhKTtcbiAgICAgICAgICAgIGF3YWl0IChhd2FpdCBkYikuUy5pbnNlcnRPbmUoc2Vzc2lvbik7XG4gICAgICAgICAgICByZXR1cm4gZnJvbShzZXNzaW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgdXBkYXRlU2Vzc2lvbihkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCB7IF9pZCwgLi4uc2Vzc2lvbiB9ID0gdG8oZGF0YSk7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkU2Vzc2lvbiA9IGF3YWl0IChhd2FpdCBkYikuUy5maW5kT25lQW5kVXBkYXRlKHsgc2Vzc2lvblRva2VuOiBzZXNzaW9uLnNlc3Npb25Ub2tlbiB9LCB7ICRzZXQ6IHNlc3Npb24gfSwgeyByZXR1cm5Eb2N1bWVudDogXCJhZnRlclwiIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZyb20odXBkYXRlZFNlc3Npb24pO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBkZWxldGVTZXNzaW9uKHNlc3Npb25Ub2tlbikge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IChhd2FpdCBkYikuUy5maW5kT25lQW5kRGVsZXRlKHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uVG9rZW4sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmcm9tKHNlc3Npb24pO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBjcmVhdGVWZXJpZmljYXRpb25Ub2tlbihkYXRhKSB7XG4gICAgICAgICAgICBhd2FpdCAoYXdhaXQgZGIpLlYuaW5zZXJ0T25lKHRvKGRhdGEpKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyB1c2VWZXJpZmljYXRpb25Ub2tlbihpZGVudGlmaWVyX3Rva2VuKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmljYXRpb25Ub2tlbiA9IGF3YWl0IChhd2FpdCBkYikuVi5maW5kT25lQW5kRGVsZXRlKGlkZW50aWZpZXJfdG9rZW4pO1xuICAgICAgICAgICAgaWYgKCF2ZXJpZmljYXRpb25Ub2tlbilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IHsgX2lkLCAuLi5yZXN0IH0gPSB2ZXJpZmljYXRpb25Ub2tlbjtcbiAgICAgICAgICAgIHJldHVybiByZXN0O1xuICAgICAgICB9LFxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/@auth/mongodb-adapter/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();