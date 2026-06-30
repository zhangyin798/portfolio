function Tag({ label }: { label: string }) {
  return (
    <span className="h-7 px-3 bg-tag-bg text-sm text-text-secondary rounded-radius-full hover:bg-[#E5E3DD] transition-colors duration-150 flex items-center">
      {label}
    </span>
  )
}

export default Tag
