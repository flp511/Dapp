const { ethers } = require("hardhat")
const { assert, expect } = require('chai')

describe('SimpleStorage', async function() {
    let simpleStorage

    beforeEach(async function() {
        simpleStorage = await ethers.deployContract("SimpleStorage");
    })

    it('初始值为0', async function() {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = '0'
        assert.equal((currentValue.toString()), expectedValue)
        expect(currentValue.toString()).to.equal(expectedValue)
    })

    it('更新之后值为7', async function() {
        await simpleStorage.store(7)
        await simpleStorage.deploymentTransaction().wait(1)
        const updateCurrentValue = await simpleStorage.retrieve()
        const expectedValue = '7'
        assert.equal((updateCurrentValue.toString()), expectedValue)
    })
})