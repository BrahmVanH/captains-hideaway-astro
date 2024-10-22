export const GET_ALL_USERS = `
	query GetAllUsers {
		getAllUsers {
			firstName
			lastName
			username
		}
	}
`;

export const QUERY_BOOKINGS_BY_PROPERTY = `
	query QueryBookingsByProperty($propertyId: ID! {
		queryBookingsByProperty(propertyId: $propertyId {
			_id
			dateValue
			propertyId
		}
	}
`;

export const GET_HOME_IMGS = `
	query GetHomePgImgs {
		getHomePgImgs {
			headerImgUrl
			hideawayImgUrl
			cottageImgUrl
		}
	}
`;

export const GET_HIDEAWAY_IMGS = `
	query GetHideawayImgs {
		getHideawayImgs {
			headerUrl
			galleryArray {
				imgKey
				original
				thumbnail
				originalAlt
				thumbnailAlt
			}
		}
	}
`;

export const GET_COTTAGE_IMGS = `
	query GetCottageImgs {
		getCottageImgs {
			headerUrl
			galleryArray {
				original
				thumbnail
				originalAlt
				thumbnailAlt
			}
		}
	}
`;

export const GET_ABOUT_IMGS = `
	query GetAboutPgImg {
		getAboutPgImg
	}
`;

export const GET_PROPERTY_INFO = `
	query GetPropertyInfo($_id: ID! {
		getPropertyInfo(_id: $_id {
			_id
			propertyName
			propertyDescription
			amenities {
				amenityName
				amenityType
			}
			headerImgKey
		}
	}
`;

export const GET_PROPERTIES = `
	query GetProperties {
		getProperties {
			_id
			propertyName
			propertyDescription
			amenities {
				amenityName
				amenityType
			}
			headerImgKey
		}
	}
`;

export const GET_PRESEIGNED_URL = `
	query GetPresignedS3Url($imgKey: String!, $commandType: String!, $altTag: String! {
		getPresignedS3Url(imgKey: $imgKey, commandType: $commandType, altTag: $altTag
	}
`;
