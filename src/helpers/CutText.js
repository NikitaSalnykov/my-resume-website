import { t } from 'i18next';
import { useState } from 'react';

export const CutText = ({ text = "", symbols = 300 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const needsTruncation = text.length > symbols;

  const shortText = text.slice(0, symbols);

  return (
    <>
      {needsTruncation ? (
        !isExpanded ? (
          <p>
            {shortText}...
            <span
              style={{ cursor: 'pointer', color: 'black' }}
              onClick={() => setIsExpanded(true)}
            >
              <b> {t("read-more")}</b>
            </span>
          </p>
        ) : (
          <p>
            {text}
            <span
              style={{ cursor: 'pointer', color: 'black' }}
              onClick={() => setIsExpanded(false)}
            >
              <b> {t("collapse")}</b>
            </span>
          </p>
        )
      ) : (
        <p>{text}</p>
      )}
    </>
  );
};

