 document.addEventListener("DOMContentLoaded", function() {
            try {
                var t = document.querySelector(".comparisonTableContainer"),
                    e = document.querySelector("header"),
                    l = e && "fixed" == getComputedStyle(e, null).position && e.getBoundingClientRect().top >= 0 ? e.offsetHeight : "0";
                if (t) {
                    var o = t.querySelector(".comp-table__emptyRow"),
                        i = t.querySelectorAll(".comp-table__tableBodyRow .comp-table__tableData"),
                        n = t.querySelector("tbody"),
                        r = t.querySelector("thead"),
                        s = t.querySelectorAll("th"),
                        c = r.querySelector("tr");
                    r.querySelectorAll("th:not(.comp-table__emptyCell)");
                    var a = document.createElement('div');
                    a.className = 'horizontal-scroller';
                    a.innerHTML = '<div class="horizontal-scroller-content"></div>';
                    t.appendChild(a);
                    var d = a.querySelector(".horizontal-scroller-content"),
                        u = t.querySelectorAll(".comp-table__columnGroupSection");
                    t.insertAdjacentHTML("afterbegin", '<div class="comp-table__columnGroupSection comp-table__columnGroupSectionDesktop comp-table__tableRow first comp-table__stickyRowGroupPH" style="font-weight: bold;"><div class="comp-table__tableData"><span></span></div></div>');
                    var f = document.querySelector(".comp-table__stickyRowGroupPH");
                }
                function m(e, o) {
                    f.classList.add("stickyHeader"), f.style.top = o.height + l + "px", f.querySelector(".comp-table__tableData").style.minWidth = t.offsetWidth + "px", f.querySelector(".comp-table__tableData").style.maxWidth = t.offsetWidth + "px", f.querySelector("span").innerHTML = e.querySelector("span").innerHTML
                }
                function p() {
                    var e, i, s, p, L = t.getBoundingClientRect(),
                        b = r.getBoundingClientRect(),
                        v = n.getBoundingClientRect();
                    if (c.getBoundingClientRect(), a.style.left = L.left + "px", a.style.width = L.width + "px", d.style.width = t.scrollWidth + "px", L.top <= 0 + l && L.height - 50 > window.innerHeight ? (e = L, i = b, s = v, r.classList.add("stickyHeader"), r.style.top = l + "px", y(t), g(e), p = parseFloat(getComputedStyle(n).transform.substring(getComputedStyle(n).transform.indexOf("(") + 1, getComputedStyle(n).transform.lastIndexOf(")")).split(",")[5]), (0 === p || "none" == getComputedStyle(n).transform) && (o.style.height = r.offsetHeight + "px")) : v.top >= 0 + l && h(), L.bottom <= window.innerHeight || L.top + l > window.innerHeight ? a.style.visibility = "hidden" : L.top + l <= window.innerHeight && t.clientWidth < t.scrollWidth && (a.style.visibility = "visible"), L.bottom <= b.bottom && !Array.from(r.classList).includes("atBottom") ? r.classList.add("atBottom") : b.top >= 0 + l && r.classList.remove("atBottom"), (!Array.from(r.classList).includes("stickyHeader") || Array.from(r.classList).includes("atBottom")) && (f.classList.remove("stickyHeader"), f.querySelector("span").innerHTML = ""), !Array.from(r.classList).includes("atBottom")) for (let H = 0; H < u.length; H++) {
                        var S = u[H];
                        S.getBoundingClientRect().top <= b.bottom && Array.from(r.classList).includes("stickyHeader") && m(S, b)
                    }
                }
                function y(t) {
                    r.scrollLeft = t.scrollLeft
                }
                function g(t) {
                    r.style.width = t.width + "px", r.style.left = t.left + "px";
                    for (let e = 0; e < s.length; e++) i[e].getBoundingClientRect(), Array.from(r.classList).includes("stickyHeader") ? s[e].style.minWidth = getComputedStyle(i[e]).width : s[e].style.minWidth = "initial"
                }
                function h() {
                    r.classList.remove("stickyHeader"), r.style.top = "0x", o.style.height = "initial"
                }
                window.addEventListener("scroll", function() {
                    l = e && "fixed" == getComputedStyle(e, null).position && e.getBoundingClientRect().top >= 0 ? e.offsetHeight : "0", t && p()
                });
                var L = window.innerWidth;
                window.addEventListener("resize", function(e) {
                    if (t) {
                        h(), p();
                        var l = t.getBoundingClientRect();
                        e.target.innerWidth < L && (g(l), L = window.innerWidth)
                    }
                }), t && t.addEventListener("scroll", function(t) {
                    Array.from(r.classList).includes("stickyHeader") && !Array.from(r.classList).includes("atBottom") && y(t.target), a.scrollLeft = t.target.scrollLeft
                }), t && a.addEventListener("scroll", function(e) {
                    Array.from(r.classList).includes("stickyHeader") && !Array.from(r.classList).includes("atBottom") && y(e.target), t.scrollLeft = e.target.scrollLeft
                }), t && r.addEventListener("scroll", function(e) {
                    a.scrollLeft = e.target.scrollLeft, t.scrollLeft = e.target.scrollLeft
                }), t && (g(t.getBoundingClientRect()), p());
                var v = document.querySelector(".comp-table_pricingToggle");
                if (v) {
                    var H = v.querySelectorAll("input[name='annual_monthly']");
                    for (let S = 0; S < H.length; S++) H[S].addEventListener("change", function(t) {
                        for (let e = 0; e < s.length; e++) {
                            var l = s[e].querySelector(".comp-table__price");
                            l && (l.innerHTML = l.getAttribute(t.target.value))
                        }
                    })
                }
            } catch (q) {
                console.log(q)
            }
        });
        


        