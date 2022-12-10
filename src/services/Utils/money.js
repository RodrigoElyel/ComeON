import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
const formatToMoney = (number, options = {}, country = 'pt-BR') => {
  if (isNaN(number)) return ''

  const { style, currency = 'BRL', minimumFractionDigits = 2 } = options

  return new Intl.NumberFormat(country, { style, currency, minimumFractionDigits }).format(number)
}

const formatCurrency = price => formatToMoney(price, { style: 'currency' })

export {
  formatToMoney,
  formatCurrency
}
