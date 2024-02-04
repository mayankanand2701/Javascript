let a=first.getAttribute("class");
console.log(a);
// Output : hey

// to check whehter it has a attribute
console.log(first.hasAttribute("class"));
// Output : true
console.log(first.hasAttribute("style"));
// Output : false

// to set any attribute
first.setAttribute("hidden","true");
console.log(first.hasAttribute("hidden"));
// Output : true

// to remove any attribute
first.removeAttribute("hidden");
console.log(first.hasAttribute("hidden"));
// Output : false

// to list all the attributes
console.log(first.attributes)

// to make your custom attributes
// always set your attribute using data-
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)