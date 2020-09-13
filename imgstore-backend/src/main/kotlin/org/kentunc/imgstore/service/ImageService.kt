package org.kentunc.imgstore.service

import org.kentunc.imgstore.model.ImageMetaData
import org.kentunc.imgstore.model.ImageRawData
import org.kentunc.imgstore.repository.ImageRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class ImageService(private val imageRepository: ImageRepository) {

    @Transactional(readOnly = true)
    fun getAll(): List<ImageMetaData> = imageRepository.findAll()

    @Transactional(readOnly = true)
    fun getRawData(imageId: Int): ImageRawData = imageRepository.findRawData(imageId)

    @Transactional
    fun store(caption: String, binary: ByteArray) = imageRepository.save(caption, binary)
}
