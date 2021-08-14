function copyToClipboard(e){var t=jQuery("<input />");jQuery("body").append(t),t.val(e).select(),document.execCommand("copy"),t.remove()}!function(e,t){"use strict";!function(){e(document).ready(function(){if("object"==typeof window.Forminator&&"object"==typeof window.Forminator.Utils&&Forminator.Utils.sui_delegate_events(),e(".forminator-toggle-entries-filter").click(function(t){return e(this).toggleClass("sui-active"),e(this).closest(".sui-box-body").find(".sui-pagination-filter").toggleClass("sui-open"),!1}),void 0!==e.fn.daterangepicker){var t={};void 0!==window.forminator_entries_datepicker_ranges&&(t=window.forminator_entries_datepicker_ranges),e("input.forminator-entries-filter-date").daterangepicker({autoUpdateInput:!1,autoApply:!0,alwaysShowCalendars:!0,ranges:t,locale:forminatorl10n.daterangepicker}),e("input.forminator-entries-filter-date").on("apply.daterangepicker",function(t,i){e(this).val(i.startDate.format("MM/DD/YYYY")+" - "+i.endDate.format("MM/DD/YYYY"))})}if(e("form.forminator-entries-actions").on("submit",function(){return""===e(this).find("select[name=entries-action]").val()&&""===e(this).find("select[name=entries-action-bottom]").val()?e(this).find("fieldset.forminator-entries-nonce").attr("disabled","disabled"):e(this).find("fieldset.forminator-entries-nonce").removeAttr("disabled"),!0}),e(".forminator-entries-clear-filter").click(function(){return e(this).closest(".sui-pagination-filter").find("input[name=date_range]").val("").trigger("change"),e(this).closest(".sui-pagination-filter").find("input[name=search]").val("").trigger("change"),e(this).closest(".sui-pagination-filter").find("input[name=min_id]").val("").trigger("change"),e(this).closest(".sui-pagination-filter").find("input[name=max_id]").val("").trigger("change"),e(this).closest(".sui-pagination-filter").find("select[name=order_by] option").removeAttr("selected"),e(this).closest(".sui-pagination-filter").find("select[name=order_by]").val("").trigger("change"),e(this).closest(".sui-pagination-filter").find("select[name=order_by] option").removeAttr("selected"),e(this).closest(".sui-pagination-filter").find("select[name=order_by]").val("").trigger("change"),e(this).closest(".sui-pagination-filter").find("select[name=order] option").removeAttr("selected"),e(this).closest(".sui-pagination-filter").find("select[name=order]").val("").trigger("change"),e(this).closest(".sui-pagination-filter").find(".forminator-field-select-tab .sui-tabs-menu label[data-tab-index=1]").trigger("click"),e(this).closest(".sui-pagination-filter").find("fieldset.forminator-entries-fields-filter").attr("disabled","disabled"),!1}),e(".forminator-field-select-tab .sui-tabs-menu label").click(function(){var t=e(this).data("tab-index");t=+t,e(this).closest(".sui-side-tabs").find(".sui-tabs-menu label").removeClass("active"),e(this).addClass("active"),e(this).closest(".sui-side-tabs").find(".sui-tabs-content .sui-tab-content").removeClass("active"),e(this).closest(".sui-side-tabs").find(".sui-tabs-content .sui-tab-content[data-tab-index="+t+"]").addClass("active"),1===t?e(this).closest(".sui-side-tabs").find("fieldset.forminator-entries-fields-filter").attr("disabled","disabled"):e(this).closest(".sui-side-tabs").find("fieldset.forminator-entries-fields-filter").removeAttr("disabled")}),e("#wpf-cform-check_all").on("click",function(t){var i=this.checked,n=e(this).closest("table");e(n).find(".sui-checkbox input").each(function(){this.checked=i})}),e("#forminator-check-all-modules").on("click",function(){var t=this.checked;if(e("#forminator-modules-list").length&&(e("#forminator-modules-list").find('.sui-checkbox input[id|="wpf-module"]').each(function(){this.checked=t}),e('form[name="bulk-action-form"] input[name="ids"]').length)){var i=e("#forminator-modules-list").find('.sui-checkbox input[id|="wpf-module"]:checked').map(function(){if(parseFloat(this.value))return this.value}).get().join(",");e('form[name="bulk-action-form"] input[name="ids"]').val(i)}}),0!==e('form[name="bulk-action-form"]').length&&e(document).on("click",".sui-checkbox input",function(){if(e('form[name="bulk-action-form"] input[name="ids"]').length){var t=e(".sui-checkbox input:checked").map(function(){if(parseFloat(this.value))return this.value}).get().join(",");e('form[name="bulk-action-form"] input[name="ids"]').val(t)}"forminator-check-all-modules"!==e(this).attr("id")&&e("#forminator-check-all-modules").prop("checked",!1)}),e(".wpmudev-can--hide").ready(function(){e(this).find(".wpmudev-box-header").on("click",function(){e(this).closest(".wpmudev-can--hide").toggleClass("wpmudev-is--hidden")})}),e(document).on("click",".wpmudev-open-entry",function(t){if("checkbox"!==e(t.target).attr("type")&&!e(t.target).hasClass("wpdui-icon-check")){t.preventDefault(),t.stopPropagation();var i=e(this),n=i.data("entry"),a=e("#forminator-"+n),o=!0;a.hasClass("wpmudev-is_open")&&(o=!1),e(".wpmudev-entries--result").removeClass("wpmudev-is_open"),o&&a.toggleClass("wpmudev-is_open")}}),e(".wpmudev-result--menu").ready(function(){e(this).find(".wpmudev-button-action").on("click",function(){var t=e(this).next(".wpmudev-menu");e(".wpmudev-result--menu.wpmudev-active").removeClass("wpmudev-active"),e(".wpmudev-button-action.wpmudev-active").not(e(this)).removeClass("wpmudev-active"),e(".wpmudev-menu").not(t).addClass("wpmudev-hidden"),e(this).toggleClass("wpmudev-active"),t.toggleClass("wpmudev-hidden")})}),e(document).ready(function(){var t=e(".wpmudev-list"),i=t.find(".wpmudev-list-table"),n=i.find(".wpmudev-table-body tr"),a=n.length,o=a;n.each(function(){e(this).find(".wpmudev-body-menu").css("z-index",o),o--})}),e(document).ready(function(){e("body").on("change",".sui-insert-variables select",function(t){var i=e(t.target),n=i.data("textarea-id");if(n){if(t.preventDefault(),e("#"+n).length>0){var a=e("input#"+n+",textarea#"+n),o=a.val();a.val(o+" "+i.val()),a.trigger("change",a.val())}return!1}}),e(document).on("click",".copy-clipboard",function(t){t.preventDefault(),copyToClipboard(e(this).data("shortcode")),Forminator.Notification.open("success",Forminator.l10n.options.shortcode_copied,4e3)}),e("body").on("click",".delete-poll-submission",function(t){var i=e(t.target),n={action:"forminator_delete_poll_submissions",id:i.data("id"),_ajax_nonce:i.data("nonce")};i.addClass("sui-button-onload"),e.post({url:Forminator.Data.ajaxUrl,type:"post",data:n}).done(function(e){e.success&&jQuery(".sui-poll-submission").addClass("sui-message").html("").html(e.data.html),Forminator.Popup.close(),_.isUndefined(e.data.notification)||_.isUndefined(e.data.notification.type)||_.isUndefined(e.data.notification.text)||_.isUndefined(e.data.notification.duration)||Forminator.Notification.open(e.data.notification.type,e.data.notification.text,e.data.notification.duration).done(function(){})})}),e(".forminator-grouped-notice .notice-dismiss").on("click",function(t){t.preventDefault();const i=e(t.currentTarget).closest(".forminator-grouped-notice");jQuery.post(ajaxurl,{action:"forminator_dismiss_notice",slug:i.data("notice-slug"),_ajax_nonce:i.data("nonce")}).always(function(){i.hide()})})}),0!==e("#forminator-search-modules").length){var i=e("#forminator-search-modules"),n=i.find('input[name="page"]').val(),a=forminatorData.adminUrl+"admin.php?page="+n,o=i.find('input[name="search"]'),s=o.val(),r=e("#forminator-modules-list"),d=e("#search_loader");i.on("submit",function(t){if(t.preventDefault(),o=e(this).find('input[name="search"]'),s=o.val(),0===s.length)return void("true"===e(this).data("searched")&&(window.location.href=a));e(this).data("searched","true"),e.ajax({url:Forminator.Data.ajaxUrl,type:"POST",data:{action:"forminator_module_search",_ajax_nonce:e(this).find("#forminator-nonce-search-module").val(),search_keyword:s,modules:e(this).find('input[name="modules"]').val(),module_slug:e(this).find('input[name="module_slug"]').val(),preview_title:e(this).find('input[name="preview_title"]').val(),sql_month_start_date:e(this).find('input[name="sql_month_start_date"]').val(),wizard_page:e(this).find('input[name="wizard_page"]').val(),preview_dialog:e(this).find('input[name="preview_dialog"]').val(),export_dialog:e(this).find('input[name="export_dialog"]').val(),post_type:e(this).find('input[name="post_type"]').val(),page:n},beforeSend:function(){r.empty(),d.show(),o.prop("disabled",!0),e(".sui-pagination").remove(),e(".sui-pagination-results").html(""),e("#forminator-search-modules .search-reset").hide()},success:function(t){d.hide(),r.html(t.data),e("html").animate({scrollTop:r.offset().top-150},300),e('form[name="bulk-action-form"]').find('input[name="msearch"]').val(s),r.find('.module-actions input[name="msearch"]').val(s),o.prop("disabled",!1),e(".sui-pagination-results").html(window.singularPluralText(r.find(".sui-accordion-item").length,Forminator.l10n.form.result,Forminator.l10n.form.results)),e("#forminator-search-modules .search-reset").show()}})}),0!==o.length&&0!==s.length&&i.submit(),e(document).on("click","#forminator-search-modules .search-reset",function(e){e.preventDefault(),window.location.href=a})}}),e(window).on("load",function(){"object"!=typeof window.Forminator||"object"!=typeof window.Forminator.Utils||"forminator-entries"!==Forminator.Utils.get_url_param("page")||Forminator.Utils.get_url_param("form_type")||Forminator.Utils.get_url_param("form_id")||e(".show-submissions").trigger("click")}),e(window).on("pageshow",function(e){(e.persisted||void 0!==window.performance&&"back_forward"===window.performance.getEntriesByType("navigation")[0].type)&&window.location.reload()})}()}(jQuery,document);var forminator_render_captcha=function(){jQuery(".forminator-g-recaptcha").each(function(){var e=jQuery(this).data("size"),t={sitekey:jQuery(this).data("sitekey"),theme:jQuery(this).data("theme"),badge:jQuery(this).data("badge"),size:e};if(""!==t.sitekey){window.grecaptcha.render(jQuery(this)[0],t)}})};