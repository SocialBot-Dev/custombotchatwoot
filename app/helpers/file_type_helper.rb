module FileTypeHelper
  def file_type(content_type)
    return :image if content_type.include?('image/')

    return :video if content_type.include?('video/')
    return :audio if content_type.include?('audio/')

    :file
  end
end
