import installer from './package-installer'

describe('packageInstaller', () => {
  describe('given an empty array of packages', () => {
    it('returns an empty string', () => {
      let actual = installer([])
      expect(actual).toEqual("")
    })
  })

  describe('packageInstaller', () => {
    describe('given two packages, where KittenService depends on CamelCaser', () => {
      it('output indicates CamelCaser needs to be installed before KittesService', () => {
        let actual = installer(["KittenService: CamelCaser", "CamelCaser: "])
        expect(actual).toEqual("CamelCaser, KittenService")
      })
    })

  describe('given a list with a single package', () => {
    it('returns a string with the single package', () => {
      let actual = installer(["KittenService: "])
      expect(actual).toEqual("KittenService")
    })
  })
})
