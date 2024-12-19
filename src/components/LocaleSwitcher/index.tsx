import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "../LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en_US",
          label: t("en_US"),
        },
        {
          value: "zh_CN",
          label: t("zh_CN"),
        },
      ]}
      label={t("label")}
    />
  );
}
