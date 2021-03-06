import installer from './package-installer'

describe('packageInstaller', () => {

  

  describe('given an empty array of packages', () => {
    it('returns an empty string', () => {
      let actual = installer([])
      expect(actual).toEqual("")
    })
  })

  

  describe('given a list with a single package', () => {
    it('returns a string with the single package', () => {
      let actual = installer(["KittenService: "])
      expect(actual).toEqual("KittenService")
    })
  })

  describe('given two packages KittenService and CamelCaser, KittenService depends on CamelCaser', () => {
    it('Output indicates that CamelCaser needs to be installed before KittenService', () => {
      let actual = installer(["KittenService: CamelCaser", "CamelCaser: "])
      expect(actual).toEqual("CamelCaser, KittenService")
    })
  })

  describe('given a list of packages with dependencies', () => {
    it('a valid output would be', () => {
      let actual = installer(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: Leetmeme", "Ice: "])
      expect(actual).toEqual("KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream")
    })
  })

  describe('The following input should be rejected because it contains a cycle', () => {
    it('a valid output would be', () => {
      let actual = installer(["KittenService: ", "Leetmeme: Cyberportal", "Cyberportal: Ice", "CamelCaser: KittenService", "Fraudstream: ", "Ice: Leetmeme"])
      expect(actual).toEqual(ErrorEvent)
    })
  })


})
