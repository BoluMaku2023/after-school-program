"use client";

export default function Page({ params }) {
  const goto = () => {
    document.getElementById("redirect").click();
  };
  goto;
  return <a id="redirect" href="/student/school" />;
}
