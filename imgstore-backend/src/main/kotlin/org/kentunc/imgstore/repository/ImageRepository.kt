package org.kentunc.imgstore.repository

import org.kentunc.imgstore.model.ImageMetaData
import org.kentunc.imgstore.model.ImageRawData

interface ImageRepository {

    fun findAll(): List<ImageMetaData>
    fun findRawData(imageId: Int): ImageRawData
    fun save(caption: String, binary: ByteArray)
}
