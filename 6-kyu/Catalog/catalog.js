function catalog(s, article) {

    return !s.includes(article)
        ? "Nothing"
        : s.split("\n\n")
            .filter(a => a.includes(article))
            .map(b => `${b.substring(b.indexOf("<name>") + 6, b.indexOf("</name>"))} > prx: $`
                + `${b.substring(b.indexOf("<prx>") + 5, b.indexOf("</prx>"))} qty: `
                + `${b.substring(b.indexOf("<qty>") + 5, b.indexOf("</qty>"))}`)
            .join("\r\n");
}