import sjcl from 'sjcl'

const Hash = (text)=>{
    const myBitArray = sjcl.hash.sha256.hash(text)
    return sjcl.codec.hex.fromBits(myBitArray)
}

export default Hash;