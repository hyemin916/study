const plays = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
};

const invoices = {
  customer: "Bigco",
  performances: [
    { playID: "hamlet", audience: 55 },
    { playID: "as-like", audience: 35 },
    { playID: "othello", audience: 40 },
  ],
};

function statement(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  return renderPlainText(statementData);
}

function renderPlainText(data) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    result += ` ${perf.play.name}: ${usd(amountFor(perf) / 100)} (${
      perf.audience
    }석)\n`;
  }

  result += `총액: ${usd(totalAmount() / 100)}\n`;
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;

  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(aNumber);
  }

  function amountFor(aPerformance) {
    let result = 0;

    switch (aPerformance.play.type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case "comedy":
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
    }

    return result;
  }

  function totalAmount() {
    let result = 0;
    for (let perf of data.performances) {
      result += amountFor(perf);
    }
    return result;
  }

  function totalVolumeCredits() {
    let result = 0;

    for (let perf of data.performances) {
      result += volumeCreditsFor(perf);
    }

    return result;
  }

  function volumeCreditsFor(perf) {
    let volumeCredits = 0;
    volumeCredits += Math.max(perf.audience - 30, 0);

    if ("comedy" === perf.play.type)
      volumeCredits += Math.floor(perf.audience / 5);

    return volumeCredits;
  }
}

console.log(statement(invoices, plays));
