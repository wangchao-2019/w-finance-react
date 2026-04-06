// 银行信息类型

// 简化版 BIN 库（前6位），生产环境可扩展完整
var BIN_BANK_MAP = {
  // 工商银行
  '622200': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '622202': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '622203': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '622206': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '622208': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '621225': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '621226': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '621227': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '621229': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '621482': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '621558': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '621722': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '621723': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '借记卡'
  },
  '622230': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '信用卡'
  },
  '622231': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '信用卡'
  },
  '622235': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '信用卡'
  },
  '622240': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '信用卡'
  },
  '622245': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '信用卡'
  },
  '427020': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '信用卡'
  },
  '451810': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '信用卡'
  },
  '530986': {
    bankName: '中国工商银行',
    bankCode: 'ICBC',
    cardType: '信用卡'
  },
  // 农业银行
  '622848': {
    bankName: '中国农业银行',
    bankCode: 'ABC',
    cardType: '借记卡'
  },
  '622846': {
    bankName: '中国农业银行',
    bankCode: 'ABC',
    cardType: '借记卡'
  },
  '622845': {
    bankName: '中国农业银行',
    bankCode: 'ABC',
    cardType: '借记卡'
  },
  '622841': {
    bankName: '中国农业银行',
    bankCode: 'ABC',
    cardType: '借记卡'
  },
  '622828': {
    bankName: '中国农业银行',
    bankCode: 'ABC',
    cardType: '借记卡'
  },
  '622826': {
    bankName: '中国农业银行',
    bankCode: 'ABC',
    cardType: '借记卡'
  },
  '622825': {
    bankName: '中国农业银行',
    bankCode: 'ABC',
    cardType: '借记卡'
  },
  '622824': {
    bankName: '中国农业银行',
    bankCode: 'ABC',
    cardType: '借记卡'
  },
  '625996': {
    bankName: '中国农业银行',
    bankCode: 'ABC',
    cardType: '信用卡'
  },
  '403361': {
    bankName: '中国农业银行',
    bankCode: 'ABC',
    cardType: '信用卡'
  },
  '519412': {
    bankName: '中国农业银行',
    bankCode: 'ABC',
    cardType: '信用卡'
  },
  // 中国银行
  '621661': {
    bankName: '中国银行',
    bankCode: 'BOC',
    cardType: '借记卡'
  },
  '621785': {
    bankName: '中国银行',
    bankCode: 'BOC',
    cardType: '借记卡'
  },
  '621786': {
    bankName: '中国银行',
    bankCode: 'BOC',
    cardType: '借记卡'
  },
  '621788': {
    bankName: '中国银行',
    bankCode: 'BOC',
    cardType: '借记卡'
  },
  '621789': {
    bankName: '中国银行',
    bankCode: 'BOC',
    cardType: '借记卡'
  },
  '621790': {
    bankName: '中国银行',
    bankCode: 'BOC',
    cardType: '借记卡'
  },
  '622752': {
    bankName: '中国银行',
    bankCode: 'BOC',
    cardType: '信用卡'
  },
  '622755': {
    bankName: '中国银行',
    bankCode: 'BOC',
    cardType: '信用卡'
  },
  '409661': {
    bankName: '中国银行',
    bankCode: 'BOC',
    cardType: '信用卡'
  },
  '512316': {
    bankName: '中国银行',
    bankCode: 'BOC',
    cardType: '信用卡'
  },
  // 建设银行
  '622700': {
    bankName: '中国建设银行',
    bankCode: 'CCB',
    cardType: '借记卡'
  },
  '622280': {
    bankName: '中国建设银行',
    bankCode: 'CCB',
    cardType: '借记卡'
  },
  '621466': {
    bankName: '中国建设银行',
    bankCode: 'CCB',
    cardType: '借记卡'
  },
  '621467': {
    bankName: '中国建设银行',
    bankCode: 'CCB',
    cardType: '借记卡'
  },
  '621700': {
    bankName: '中国建设银行',
    bankCode: 'CCB',
    cardType: '借记卡'
  },
  '436742': {
    bankName: '中国建设银行',
    bankCode: 'CCB',
    cardType: '信用卡'
  },
  '532458': {
    bankName: '中国建设银行',
    bankCode: 'CCB',
    cardType: '信用卡'
  },
  '625360': {
    bankName: '中国建设银行',
    bankCode: 'CCB',
    cardType: '信用卡'
  },
  // 交通银行
  '622260': {
    bankName: '交通银行',
    bankCode: 'BOCOM',
    cardType: '借记卡'
  },
  '622261': {
    bankName: '交通银行',
    bankCode: 'BOCOM',
    cardType: '借记卡'
  },
  '622262': {
    bankName: '交通银行',
    bankCode: 'BOCOM',
    cardType: '借记卡'
  },
  '621483': {
    bankName: '交通银行',
    bankCode: 'BOCOM',
    cardType: '借记卡'
  },
  '622251': {
    bankName: '交通银行',
    bankCode: 'BOCOM',
    cardType: '信用卡'
  },
  '622253': {
    bankName: '交通银行',
    bankCode: 'BOCOM',
    cardType: '信用卡'
  },
  '521899': {
    bankName: '交通银行',
    bankCode: 'BOCOM',
    cardType: '信用卡'
  },
  // 邮储银行
  '622188': {
    bankName: '中国邮政储蓄银行',
    bankCode: 'PSBC',
    cardType: '借记卡'
  },
  '622150': {
    bankName: '中国邮政储蓄银行',
    bankCode: 'PSBC',
    cardType: '借记卡'
  },
  '621098': {
    bankName: '中国邮政储蓄银行',
    bankCode: 'PSBC',
    cardType: '借记卡'
  },
  '621798': {
    bankName: '中国邮政储蓄银行',
    bankCode: 'PSBC',
    cardType: '借记卡'
  },
  '621799': {
    bankName: '中国邮政储蓄银行',
    bankCode: 'PSBC',
    cardType: '借记卡'
  },
  '622810': {
    bankName: '中国邮政储蓄银行',
    bankCode: 'PSBC',
    cardType: '信用卡'
  },
  '625919': {
    bankName: '中国邮政储蓄银行',
    bankCode: 'PSBC',
    cardType: '信用卡'
  },
  // 招商银行
  '622588': {
    bankName: '招商银行',
    bankCode: 'CMB',
    cardType: '借记卡'
  },
  '622589': {
    bankName: '招商银行',
    bankCode: 'CMB',
    cardType: '借记卡'
  },
  '621485': {
    bankName: '招商银行',
    bankCode: 'CMB',
    cardType: '借记卡'
  },
  '439188': {
    bankName: '招商银行',
    bankCode: 'CMB',
    cardType: '信用卡'
  },
  '518718': {
    bankName: '招商银行',
    bankCode: 'CMB',
    cardType: '信用卡'
  },
  '622576': {
    bankName: '招商银行',
    bankCode: 'CMB',
    cardType: '信用卡'
  },
  // 浦发银行
  '622521': {
    bankName: '上海浦东发展银行',
    bankCode: 'SPDB',
    cardType: '借记卡'
  },
  '622522': {
    bankName: '上海浦东发展银行',
    bankCode: 'SPDB',
    cardType: '借记卡'
  },
  '621792': {
    bankName: '上海浦东发展银行',
    bankCode: 'SPDB',
    cardType: '借记卡'
  },
  '622177': {
    bankName: '上海浦东发展银行',
    bankCode: 'SPDB',
    cardType: '信用卡'
  },
  '622277': {
    bankName: '上海浦东发展银行',
    bankCode: 'SPDB',
    cardType: '信用卡'
  },
  // 中信银行
  '622690': {
    bankName: '中信银行',
    bankCode: 'CITIC',
    cardType: '借记卡'
  },
  '622691': {
    bankName: '中信银行',
    bankCode: 'CITIC',
    cardType: '借记卡'
  },
  '622692': {
    bankName: '中信银行',
    bankCode: 'CITIC',
    cardType: '借记卡'
  },
  '621771': {
    bankName: '中信银行',
    bankCode: 'CITIC',
    cardType: '借记卡'
  },
  '622676': {
    bankName: '中信银行',
    bankCode: 'CITIC',
    cardType: '信用卡'
  },
  // 光大银行
  '622660': {
    bankName: '中国光大银行',
    bankCode: 'CEB',
    cardType: '借记卡'
  },
  '622661': {
    bankName: '中国光大银行',
    bankCode: 'CEB',
    cardType: '借记卡'
  },
  '622662': {
    bankName: '中国光大银行',
    bankCode: 'CEB',
    cardType: '借记卡'
  },
  '621489': {
    bankName: '中国光大银行',
    bankCode: 'CEB',
    cardType: '借记卡'
  },
  '622653': {
    bankName: '中国光大银行',
    bankCode: 'CEB',
    cardType: '信用卡'
  },
  // 民生银行
  '622622': {
    bankName: '中国民生银行',
    bankCode: 'CMBC',
    cardType: '借记卡'
  },
  '622615': {
    bankName: '中国民生银行',
    bankCode: 'CMBC',
    cardType: '借记卡'
  },
  '621691': {
    bankName: '中国民生银行',
    bankCode: 'CMBC',
    cardType: '借记卡'
  },
  '622601': {
    bankName: '中国民生银行',
    bankCode: 'CMBC',
    cardType: '信用卡'
  },
  // 兴业银行
  '622908': {
    bankName: '兴业银行',
    bankCode: 'CIB',
    cardType: '借记卡'
  },
  '622909': {
    bankName: '兴业银行',
    bankCode: 'CIB',
    cardType: '借记卡'
  },
  '621721': {
    bankName: '兴业银行',
    bankCode: 'CIB',
    cardType: '借记卡'
  },
  '622901': {
    bankName: '兴业银行',
    bankCode: 'CIB',
    cardType: '信用卡'
  },
  // 华夏银行
  '622630': {
    bankName: '华夏银行',
    bankCode: 'HXB',
    cardType: '借记卡'
  },
  '622631': {
    bankName: '华夏银行',
    bankCode: 'HXB',
    cardType: '借记卡'
  },
  '622632': {
    bankName: '华夏银行',
    bankCode: 'HXB',
    cardType: '借记卡'
  },
  '621791': {
    bankName: '华夏银行',
    bankCode: 'HXB',
    cardType: '借记卡'
  },
  '622637': {
    bankName: '华夏银行',
    bankCode: 'HXB',
    cardType: '信用卡'
  },
  // 平安银行
  '622986': {
    bankName: '平安银行',
    bankCode: 'PINGAN',
    cardType: '借记卡'
  },
  '622987': {
    bankName: '平安银行',
    bankCode: 'PINGAN',
    cardType: '借记卡'
  },
  '621626': {
    bankName: '平安银行',
    bankCode: 'PINGAN',
    cardType: '借记卡'
  },
  '622157': {
    bankName: '平安银行',
    bankCode: 'PINGAN',
    cardType: '信用卡'
  }
};

// Luhn 算法校验卡号
export function luhnCheck(cardNo) {
  var num = cardNo.replace(/\D/g, '');
  if (num.length < 13 || num.length > 19) return false;
  var sum = 0;
  var even = false;
  for (var i = num.length - 1; i >= 0; i--) {
    var digit = parseInt(num.charAt(i), 10);
    if (even) digit *= 2;
    sum += Math.floor(digit / 10);
    sum += digit % 10;
    even = !even;
  }
  return sum % 10 === 0;
}

// 获取银行信息
export function getBankByCardNo(cardNo) {
  var num = cardNo.replace(/\D/g, '');
  if (num.length < 6) return null;
  var bin = num.slice(0, 6);
  return BIN_BANK_MAP[bin] || null;
}

// 格式化：每4位加空格
export function formatCardNo(val) {
  var _num$match;
  var num = val.replace(/\D/g, '');
  return ((_num$match = num.match(/.{1,4}/g)) === null || _num$match === void 0 ? void 0 : _num$match.join(' ')) || '';
}

// 脱敏：6222 01** **** 1234
export function desensitizeCardNo(cardNo) {
  var _$repeat$match;
  var num = cardNo.replace(/\D/g, '');
  if (num.length <= 8) return formatCardNo(num);
  var start = num.slice(0, 4);
  var end = num.slice(-4);
  var starLen = num.length - 8;
  return "".concat(start, " ").concat((_$repeat$match = '*'.repeat(starLen).match(/.{1,4}/g)) === null || _$repeat$match === void 0 ? void 0 : _$repeat$match.join(' '), " ").concat(end);
}