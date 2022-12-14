
"use strict";

function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(r, e) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, e);
        var n = Object.prototype.toString.call(r).slice(8, -1);
        return "Object" === n && r.constructor && (n = r.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(r, e) : void 0
    }
}

function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) return Array.from(r)
}

function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r)
}

function _arrayLikeToArray(r, e) {
    (null == e || e > r.length) && (e = r.length);
    for (var n = 0, t = new Array(e); n < e; n++) t[n] = r[n];
    return t
}

var body = document.getElementById("body"),
    codexEl = document.getElementById("codexEl"),
    nickname = document.getElementById("nickname"),
    getRandomNumber = function(r, e) {
        return Math.floor((e - r) * Math.random()) + r
    }

var codex = ["1. <b>dead inside ghoul</b> - это не стиль общения, не плейстайл pos 1/2 no roll, и даже не чб ава с Эксом в наушниках. Гуль - это образ жизни, даже скорее образ мышления. Ты можешь называться гулем, если не смотришь на людей как на равных, и осознаешь, что это все лишь скот. Да, ты должен преподносить себя как кого-то, кто по умолчанию лучше других, однако это нужно оправдывать.", "2. Гулем может быть каждый, но не каждый тру, и не каждый гуль - SSS rank. Если у тебя 2к птс ты все еще можешь быть гулем, но нужно знать свое место. Если ты слабый игрок, то не нужно высирать в чат союзнику (или еще лучше, противнику) чел, го zxc, я тебя разъебу 1v1, ты выглядишь как клоун. Если ты смеешь считать себя гулем, то не позорься, ты выше этого. Проиграл игру? Стань лучше и выиграй следующие 2. И еще, написал что то игроку, у которого больше чем на 500 птс больше, чем у тебя - ты выскочка, а не гуль.", '3. Ты не клоун. Да, это было в рофельном кодексе, но здесь я попробую описать все, что делает из тебя клоуна, а не гуля. Нужно разделять ситуации, когда тебе ♥♥♥♥♥♥♥♥♥♥ на то, что думают людишки о твоем поведении, и когда ты правда выглядишь как клоун и только позоришь себя и dead inside culture. Если у тебя счет не 10/0 и ты оскорбляешь энэми в чате - ты клоун. Если у тебя счет не 10/0 и ты пишешь не фидящему союзнику, что он бездарь - ты клоун. Если ты ставишь паузу не после смерти энэми мидера до 3 минуты или супер глупого размена по хп (например, 3 рейзов), а после каждого килла - ты клоун. Если на каждый мув высuраешь "?" в чат - ты клоун. Общаешься всю игру с энэми в чате (речь о ситуации, когда вы друг друга оскорбляете)? гц тебя, ты клоун. Если челы что-то тебе пишут - mute all chat, zitrax mode.', "4. Насчет ника и аватара. Конечно, если ты хочешь, что бы все знали, что ты гуль, то ставь чб аву, прифотошопленный к чару глаз или скрин из гуля, и ник dead inside, но это не обязательно. Просто аватар и ник должны быть эстетичными. По кайфу играю, по кайфу одет (с).", '5. Тебе плевать на всех, но ты должен вести себя уважительно с сильными игроками, особенно теми, кто сильнее тебя. Не оскорбляй тех, кто этого не заслуживает. Тебя не волнуют чужие чувства, но ты ведешь себя как агрессивный ребенок, а не как SSS rank, когда с 0 секунды пишешь в чат: "Бездари, вы животные а не игроки, дайте мне мид я выиграю вам игру".', "6. zitrax mode11, zxczxczxczxczxczxczxc. Ты должен выигрывать, твои цифры это твоя кровь и плоть, цифры энеми- твоя еда. Если ты разбиваешь шмотки после каждой ошибки суппорта на лайне - ты не гуль, ты выскочка подросток, который не может контролировать свои эмоции. Ты имеешь право сломать вещи в игре, где команда сама тебе специально руинит. В остальных случаях ты должен показывать людишкам, кто здесь гуль. Не получилось? Становись сильнее.", "7. Этот пункт вытекает из предыдущего. Хочешь побеждать? Играй на pos 1/2. Ты можешь играть и на других позициях, если ты хорош на них. Суть в том, что бы вывозить 10/10 игр, если у тебя получается делать это на суппорте - гц.", "8. Отвечай за базар, а значит следи за ним. Сказал что вынесешь в лоббаке? Выноси, а не умирай на второй минуте от рейзов лвл 2. Сказал, что сломаешь вещи? Ломай. Это не значит, что нужно каждую игру ломать вещи, это значит, что не нужно быть клоуном, который 24/7 кидается фразами в чат.", "9. Ты родился дважды, второй раз в Люксембурге. Ты должен уметь выносить челов в zxc, это краеугольный камень бытия ghoul'ем.", "10. Не дожирай за кем то. Не стоит копировать ник/аватар/фразы Алохи, или еще кого-то. Если ты гуль - ты личность, а личность должна быть уникальной."],
    currentCodex = 0;

function nextCodex() {
    codexEl.innerHTML = codex[currentCodex], ++currentCodex === codex.length && (currentCodex = 0)
}
nextCodex();
var rifles = ["︻┳═一", "▄︻̷̿┻̿═━一"],
    symbols = "★彡༒☬☠︎♕乡☬牡マキグナルファ系路克瑞大阪市立学鎰命科ャマ能力ϒ人は妻スティ要通り玉宏¥サ丹谷Ѫ灯影伝鶐♠♡♢♣♤♥♦♧⁂☼☽☾✪✫✬✭✮✯",
    warpSymbols = function(r, e, n) {
        for (var t = getRandomNumber(e, n), o = "", a = 0; a < t; a++) o += symbols[getRandomNumber(0, symbols.length)];
        return "".concat(o).concat(r).concat(o.split("").reverse().join(""))
    },
    sfix = [function() {
        return warpSymbols(rifles[getRandomNumber(0, rifles.length)], 0, 3)
    }, function() {
        for (var r = getRandomNumber(1, 4), e = "", n = 0; n < r; n++) e += "zxc";
        return e
    }, function() {
        var r = ["", "or feed", "or leave", "or afk", "or suicide", "или пудж с момкой", "или фид", "или лес", "or jungle"];
        return "".concat(getRandomNumber(0, 6), "-").concat(getRandomNumber(0, 6), " pos ").concat(r[getRandomNumber(0, r.length)])
    }, function() {
        var r = ["", "or feed", "or leave", "or afk", "or suicide", "или пудж с момкой", "или фид", "или лес", "or jungle"];
        return "".concat(getRandomNumber(0, 6), "-").concat(getRandomNumber(0, 6), " pos ").concat(r[getRandomNumber(0, r.length)])
    }, function() {
        return "dead inside"
    }, function() {
        return "dead outside"
    }, function() {
        return warpSymbols("дед внутри", 0, 2)
    }, function() {
        return "clown"
    }, function() {
        return warpSymbols("Touka", 0, 2)
    }, function() {
        return "мёртв внутри"
    }, function() {
        return "anti social"
    }, function() {
        return warpSymbols("sad", 0, 3)
    }, function() {
        return "sad"
    }, function() {
        return "killer"
    }, function() {
        return "чудище"
    }, function() {
        return "hate"
    }, function() {
        return "bury me"
    }, function() {
        return warpSymbols("bury me alive", 1, 3)
    }, function() {
        return '"i tired of this place"'
    }, function() {
        return warpSymbols("плевать на всех", 1, 3)
    }, function() {
        return "no brain"
    }, function() {
        return warpSymbols("feeling alive", 1, 3)
    }, function() {
        return warpSymbols("leave me on my own", 1, 3)
    }, function() {
        return "mode: "
    }, function() {
        return "hide'n'seek"
    }, function() {
        return warpSymbols("dying as a lifestyle", 1, 3)
    }, function() {
        return warpSymbols("hate me as you do", 1, 2)
    }, function() {
        return warpSymbols("tilted", 0, 2)
    }, function() {
        return warpSymbols("ugly god", 0, 3)
    }, function() {
        return "i choose violence"
    }, function() {
        return "дед инсайд если че"
    }, function() {
        return "clownless"
    }, function() {
        return "broken"
    }, function() {
        return warpSymbols("kill me", 0, 3)
    }, function() {
        return "death"
    }, function() {
        return warpSymbols("death", 1, 3)
    }, function() {
        return "ghoul"
    }, function() {
        return warpSymbols("pain", 1, 3)
    }, function() {
        return warpSymbols("pain", 1, 3)
    }, function() {
        return symbols[getRandomNumber(0, symbols.length)]
    }, function() {
        return "".concat(getRandomNumber(0, 9), "k pts")
    }, function() {
        return "".concat(["SSS", "SS+", "SS", "S+", "S", "A", "B", "C"][getRandomNumber(0, 8)], " ранг")
    }];

function generate() {
    for (var r = getRandomNumber(2, 4), e = [], n = "", t = 0; t < sfix.length; t++) e.push(t);
    for (var o = 0; o < r; o++) n += sfix[e.splice(getRandomNumber(0, e.length), 1)[0]]() + " ";
    nickname.innerHTML = n
}
generate();