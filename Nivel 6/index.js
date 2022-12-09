var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
;
var reportJokes = [];
var actualJoke = '';
var jokeText = document.querySelector(".joke");
var weather = document.querySelector(".clima");
var iconWeather = document.querySelector(".iconoClima");
var bloop = document.getElementById("blop");
function buscarChiste() {
    return __awaiter(this, void 0, void 0, function () {
        var response, joke;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://icanhazdadjoke.com", {
                        headers: {
                            Accept: 'application/json'
                        }
                    })];
                case 1:
                    response = _a.sent();
                    joke = response.json();
                    return [2 /*return*/, joke];
            }
        });
    });
}
function pulsarBoton() {
    return __awaiter(this, void 0, void 0, function () {
        var joke, value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(randomNum() === 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, buscarChiste()];
                case 1:
                    joke = (_a.sent()).joke;
                    actualJoke = joke;
                    jokeText.innerText = joke;
                    bloop.innerHTML = "<div id=\"blop3\"></div>";
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, ChuckNorris()];
                case 3:
                    value = (_a.sent()).value;
                    actualJoke = value;
                    jokeText.innerText = value;
                    bloop.innerHTML = "<div id=\"blop2\"></div>";
                    _a.label = 4;
                case 4:
                    refresh();
                    return [2 /*return*/];
            }
        });
    });
}
;
function jokeScore(nota) {
    var d = new Date();
    var text = d.toISOString();
    reportJokes.push({
        joke: actualJoke,
        score: nota,
        date: text
    });
    display();
    console.log(reportJokes);
}
function display() {
    var showBtn = document.getElementById("scoreButtons");
    var showText = document.getElementById("scoreText");
    showBtn.style.display = "none";
    showText.style.display = "block";
}
function refresh() {
    var showBtn = document.getElementById("scoreButtons");
    var showText = document.getElementById("scoreText");
    showBtn.style.display = "block";
    showText.style.display = "none";
}
var getWeatherData = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.3888&lon=2.159&appid=d6c0713d2f6f4fce6fbeed7403319adf&units=metric&lang=ES")];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                displayData(data);
                return [2 /*return*/];
        }
    });
}); };
var displayData = function (obj) {
    weather.innerHTML = Math.floor(obj.main.temp) + "ºC";
    var icon = obj.weather[0].icon;
    iconWeather.innerHTML = "<img src='./icons/".concat(icon, ".png' class=\"imagenIcono\"></img>");
};
var ChuckNorris = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('https://api.chucknorris.io/jokes/random')];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var randomNum = function () {
    var num = Math.floor(Math.random() * 2);
    return num;
};
window.onload = function () {
    getWeatherData();
};
