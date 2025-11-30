import Giscus from '@giscus/react'

export default function Comments() {
  return (
    <div className="mt-12 pt-8 border-t-2 border-bronze/20">
      <h3 className="text-2xl font-display font-semibold text-bronze mb-6">
        💬 Comments & Discussion
      </h3>
      <Giscus
        repo="Revati-N/Runtime-Archives"
        repoId="R_kgDOQdnYpA"
        category="General"
        categoryId="DIC_kwDOQdnYpM4CzN1h"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
        crossorigin="anonymous"
      />
    </div>
  )
}
