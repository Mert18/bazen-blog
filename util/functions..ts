import useLanguage from "@/hooks/useLanguage";

export const getLanguageText = (trText: string, enText: string): string => {
  const language = useLanguage();
  return language === "tr" ? trText : enText;
};