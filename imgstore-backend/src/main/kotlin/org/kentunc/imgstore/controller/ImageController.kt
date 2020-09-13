package org.kentunc.imgstore.controller

import org.kentunc.imgstore.model.ImageMetaData
import org.kentunc.imgstore.service.ImageService
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import org.springframework.web.multipart.MultipartFile
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

@RestController
@RequestMapping("/images")
@CrossOrigin
class ImageController(private val imageService: ImageService) {

    @GetMapping
    fun readAll(): List<ImageMetaData> {
        return imageService.getAll()
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun add(
        @RequestParam("binary") @NotNull multipartFile: MultipartFile?,
        @RequestParam("caption") @NotBlank caption: String?
    ) {
        imageService.store(caption!!, multipartFile!!.bytes)
    }

    @GetMapping("/{imageId}", produces = [MediaType.APPLICATION_OCTET_STREAM_VALUE])
    fun readRawData(@PathVariable("imageId") @NotNull imageId: Int?): ByteArray {
        return imageService.getRawData(imageId!!).binary
    }
}
