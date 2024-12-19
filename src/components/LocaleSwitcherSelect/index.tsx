"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTransition } from "react";
import { Locale } from "@/src/i18n/config";
import { setUserLocale } from "@/src/services/locale";
import clsx from "clsx";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    console.log(locale);
    startTransition(() => {
      setUserLocale(locale);
    });
  }
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue}>
      <SelectTrigger
        // className="w-[180px]"
        aria-label={label}
        // className={clsx(
        //   "rounded-sm p-2 transition-colors hover:bg-slate-200 w-[180px]",
        //   isPending && "pointer-events-none opacity-60"
        // )}
      >
        <SelectValue placeholder={"Select"} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
