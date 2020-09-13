package org.kentunc.imgstore.repository

import org.apache.ibatis.annotations.Mapper
import org.kentunc.imgstore.model.ImageMetaData
import org.kentunc.imgstore.model.ImageRawData
import org.springframework.stereotype.Component
import org.springframework.stereotype.Repository

@Mapper
@Repository
interface ImageMapper : ImageRepository {

    override fun findAll(): List<ImageMetaData>
    override fun findRawData(imageId: Int): ImageRawData
    override fun save(caption: String, binary: ByteArray)
}
