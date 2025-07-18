var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { _sfc_main as _sfc_main$1 } from "./BaseViewTemplate-DFm7rk9i.js";
import { defineComponent, ref, openBlock, createBlock, withCtx, createBaseVNode, toDisplayString, createTextVNode, createVNode, unref } from "./vendor-vue-Dj1-cm8e.js";
import { useToast, script$25 as script, script$2 as script$1 } from "./vendor-primevue--_uihavt.js";
import { useI18n } from "./vendor-vue-i18n-CepkKHgT.js";
import { useRouter, electronAPI } from "./index-yT-4ROaT.js";
const _hoisted_1 = { class: "h-full p-8 2xl:p-16 flex flex-col items-center justify-center" };
const _hoisted_2 = { class: "bg-neutral-800 rounded-lg shadow-lg p-6 w-full max-w-[600px] flex flex-col gap-6" };
const _hoisted_3 = { class: "text-3xl font-semibold text-neutral-100" };
const _hoisted_4 = { class: "text-neutral-400" };
const _hoisted_5 = { class: "text-neutral-400" };
const _hoisted_6 = {
  href: "https://comfy.org/privacy",
  target: "_blank",
  class: "text-blue-400 hover:text-blue-300 underline"
};
const _hoisted_7 = { class: "flex items-center gap-4" };
const _hoisted_8 = {
  id: "metricsDescription",
  class: "text-neutral-100"
};
const _hoisted_9 = { class: "flex pt-6 justify-end" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MetricsConsentView",
  setup(__props) {
    const toast = useToast();
    const { t } = useI18n();
    const allowMetrics = ref(true);
    const router = useRouter();
    const isUpdating = ref(false);
    const updateConsent = /* @__PURE__ */ __name(async () => {
      isUpdating.value = true;
      try {
        await electronAPI().setMetricsConsent(allowMetrics.value);
      } catch (error) {
        toast.add({
          severity: "error",
          summary: t("install.errorUpdatingConsent"),
          detail: t("install.errorUpdatingConsentDetail"),
          life: 3e3
        });
      } finally {
        isUpdating.value = false;
      }
      await router.push("/");
    }, "updateConsent");
    return (_ctx, _cache) => {
      const _component_BaseViewTemplate = _sfc_main$1;
      return openBlock(), createBlock(_component_BaseViewTemplate, { dark: "" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("install.helpImprove")), 1),
              createBaseVNode("p", _hoisted_4, toDisplayString(_ctx.$t("install.updateConsent")), 1),
              createBaseVNode("p", _hoisted_5, [
                createTextVNode(toDisplayString(_ctx.$t("install.moreInfo")) + " ", 1),
                createBaseVNode("a", _hoisted_6, toDisplayString(_ctx.$t("install.privacyPolicy")), 1),
                _cache[1] || (_cache[1] = createTextVNode(". "))
              ]),
              createBaseVNode("div", _hoisted_7, [
                createVNode(unref(script), {
                  modelValue: allowMetrics.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => allowMetrics.value = $event),
                  "aria-describedby": "metricsDescription"
                }, null, 8, ["modelValue"]),
                createBaseVNode("span", _hoisted_8, toDisplayString(allowMetrics.value ? _ctx.$t("install.metricsEnabled") : _ctx.$t("install.metricsDisabled")), 1)
              ]),
              createBaseVNode("div", _hoisted_9, [
                createVNode(unref(script$1), {
                  label: _ctx.$t("g.ok"),
                  icon: "pi pi-check",
                  loading: isUpdating.value,
                  "icon-pos": "right",
                  onClick: updateConsent
                }, null, 8, ["label", "loading"])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=MetricsConsentView-BmJMjFGr.js.map
