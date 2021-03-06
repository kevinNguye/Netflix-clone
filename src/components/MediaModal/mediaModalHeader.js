import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactstrap'
import { buildImageUrl } from '../../utils/imageBuilder'

MediaModalHeader.propTypes = {
    imagePath: PropTypes.string,
    title: PropTypes.string,
    imageLoad: PropTypes.func,
    isModalLoading: PropTypes.bool,
}

export function MediaModalHeader({
    imagePath,
    title,
    imageLoad,
    isModalLoading,
}) {
    return (
        <>
            <img
                alt="Media"
                onLoad={imageLoad}
                src={buildImageUrl(imagePath, 'w1280')}
            />
            {!isModalLoading && (
                <div className="header-info-container">
                    <h1>{title}</h1>
                    <Button>
                        <FontAwesomeIcon icon={['fas', 'play']} />
                        <span>Play</span>
                    </Button>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={['far', 'thumbs-up']} />
                    </div>
                    <div className="icon-wrapper">
                        <FontAwesomeIcon icon={['far', 'thumbs-down']} />
                    </div>
                </div>
            )}
        </>
    )
}
