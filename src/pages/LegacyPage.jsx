import { useEffect, useMemo } from 'react';

const sanitizeHtml = (html) => {
  if (!html) {
    return {
      content: '',
      title: document.title,
      bodyClass: document.body.className,
    };
  }

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : document.title;

  const bodyMatch = html.match(/<body[^>]*>/i);
  let bodyClass = document.body.className;
  if (bodyMatch) {
    const classMatch = bodyMatch[0].match(/class\s*=\s*"([^"]*)"/i);
    bodyClass = classMatch ? classMatch[1] : bodyClass;
  }

  const bodyContentMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const rawContent = bodyContentMatch ? bodyContentMatch[1] : html;

  const withoutScripts = rawContent.replace(/<script[\s\S]*?<\/script>/gi, '');

  return {
    content: withoutScripts,
    title,
    bodyClass,
  };
};

export default function LegacyPage({ html }) {
  const { content, title, bodyClass } = useMemo(() => sanitizeHtml(html), [html]);

  useEffect(() => {
    const previousTitle = document.title;
    if (title) {
      document.title = title;
    }
    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  useEffect(() => {
    const previousClass = document.body.className;
    if (bodyClass) {
      document.body.className = bodyClass;
    }
    return () => {
      document.body.className = previousClass;
    };
  }, [bodyClass]);

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [content]);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
