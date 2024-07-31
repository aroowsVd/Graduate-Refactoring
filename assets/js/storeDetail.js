//수량
$('.price_btn input[type="button"]').on("click", function () {
  var $ths = $(this);
  var $par = $ths.parent().parent();
  var $obj = $par.find('input[type="text"]');
  var val = $obj.val();
  if ($ths.val() == "-") {
    if (val > 1) $obj.val(--val);
  } else if ($ths.val() == "+") {
    if (val < 30) $obj.val(++val);
  }
  //수량 변경
  var unit_amount = $par
    .find(".price_unit")
    .text()
    .replace(/[^0-9]/g, "");
  var quantity = val;
  // 결제 수량 변경 로직은 메인터너스의 편리성을 위해서 밖으로 빼서 처리함.
  //1단 세로 부분 결제 금액
  pay_unit_func($par, unit_amount, quantity);
  //2단 결제 금액
  pay_total_func();
});

function pay_unit_func($par, unit_amount, quantity) {
  //1번 단
  var unit_total_amount = $par
    .find(".price_amount")
    .text((unit_amount * quantity).toLocaleString());
}

function pay_total_func() {
  //2번 단
  var amount_total = 0;
  var converse_unit = 0;
  $(".cart_list li").each(function () {
    //console.log($(this).find('.price_amount').text());
    converse_unit = $(this)
      .find(".price_amount")
      .text()
      .replace(/[^0-9]/g, "");
    amount_total = amount_total + (parseInt(converse_unit) || 0);
    //총 상품금액
    //console.log(amount_total);
  });
  //총 상품금액
  //var total_amount_money = $('.cart_total_price').children().find('.item_price').text();
  var total_amount_money = $(".cart_total_price")
    .children()
    .find(".item_price")
    .text(amount_total.toLocaleString());
  //할인금액
  var total_sale_money = parseInt(
    $(".cart_total_price")
      .children()
      .find(".sale_price")
      .text()
      .replace(/[^0-9]/g, "") || 0
  );
  console.log(total_sale_money);
  //총 배송비
  var total_delivery_price = parseInt(
    $(".cart_total_price")
      .children()
      .find(".delivery_price")
      .text()
      .replace(/[^0-9]/g, "") || 0
  );
  console.log(total_delivery_price);
  //총 결제금액
  var total_price =
    parseInt(amount_total || 0) - total_sale_money + total_delivery_price;
  var total_total_price = $(".cart_total_price")
    .children()
    .find(".total_price")
    .text(total_price.toLocaleString());
}
