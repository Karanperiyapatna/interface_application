"use strict";
var KTAppEcommerceSettings = {
    init: function () {
        ["kt_ecommerce_settings_general_form", "kt_ecommerce_settings_general_store", "kt_ecommerce_settings_general_localization", "kt_ecommerce_settings_general_products", "kt_ecommerce_settings_general_customers"].forEach((e => {
            const t = document.getElementById(e);
            if (!t) return;
            const r = t.querySelectorAll(".required");
            var o, n = {
                fields: {},
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            };
            r.forEach((e => {
                const t = e.closest(".row").querySelector("input");
                t && (o = t);
                const r = e.closest(".row").querySelector("textarea");
                r && (o = r);
                const s = e.closest(".row").querySelector("select");
                s && (o = s);
                const i = o.getAttribute("name");
                n.fields[i] = {
                    validators: {
                        notEmpty: {
                            message: e.innerText + " is required"
                        }
                    }
                }
            }));
            var s = FormValidation.formValidation(t, n);
            const i = t.querySelector('[data-kt-ecommerce-settings-type="submit"]');
            i.addEventListener("click", (function (e) {
                e.preventDefault(), s && s.validate().then((function (e) {
                    console.log("validated!"), "Valid" == e ? (i.setAttribute("data-kt-indicator", "on"), i.disabled = !0, setTimeout((function () {
                        i.removeAttribute("data-kt-indicator"), i.disabled = !1, Swal.fire({
                            text: "Form has been successfully submitted!",
                            icon: "success",
                            buttonsStyling: !1,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        })
                    }), 2e3)) : Swal.fire({
                        text: "Oops! There are some error(s) detected.",
                        icon: "error",
                        buttonsStyling: !1,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    })
                }))
            }))
        })), document.querySelectorAll('[data-kt-ecommerce-settings-type="tagify"]').forEach((e => {
            new Tagify(e)
        })), (() => {
            const e = e => {
                if (!e.id) return e.text;
                var t = document.createElement("span"),
                    r = "";
                return r += '<img src="' + e.element.getAttribute("data-kt-select2-country") + '" class="rounded-circle h-20px me-2" alt="image"/>', r += e.text, t.innerHTML = r, $(t)
            };
            $('[data-kt-ecommerce-settings-type="select2_flags"]').select2({
                placeholder: "Select a country",
                minimumResultsForSearch: 1 / 0,
                templateSelection: e,
                templateResult: e
            })
        })()
    }
};
KTUtil.onDOMContentLoaded((function () {
    KTAppEcommerceSettings.init()
}));